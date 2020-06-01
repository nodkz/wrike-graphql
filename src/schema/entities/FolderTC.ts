import { FolderID, CustomFieldID } from 'app/schema/types/Scalars';
import { ColorEnum, TreeScopeEnum, ProjectContractTypeEnum } from '../types/Enums';
import { schemaComposer } from 'graphql-compose';
import { ProjectDetails } from '../types/outputs/ProjectDetails';
import { KeyValue } from '../types/outputs/KeyValue';
import { CustomFieldTC } from './CustomFieldTC';
import { getRelationFolderIds } from '../relations/folder';
import { getRelationTasksByFolderId } from '../relations/task';
import { getRelationCommentsByFolderId } from '../relations/comment';
import { getRelationTimelogsByFolderId } from '../relations/timelog';
import { getRelationAttachmentsByFolderId } from '../relations/attachment';
import { getRelationApprovalsByFolderId } from '../relations/approval';

export const FolderTC = schemaComposer.createObjectTC({
  name: 'Folder',
  description:
    'Folders & projects are one of the main ways to organize, manage, and report on work within Wrike. They both show up in the folder tree in the left-hand Navigation panel of the Wrike Workspace. From the perspective of our data model, projects are essentially folders with additional properties (owners, start & end dates, and status). For instance, the Modify Tasks method allows you to include a task in a specified folder by passing the folder ID in the corresponding parameter. In the same way, you can pass a project ID to include a task in a project.In order to maintain data integrity, it is not possible to run more than one operations in parallel.',
  fields: {
    id: FolderID.NonNull,
    title: {
      type: 'String!',
      description: 'Title',
    },
    color: {
      type: ColorEnum,
      description: 'Folder color',
    },
    childIds: FolderID.NonNull.List,
    scope: {
      type: TreeScopeEnum.NonNull,
      description: 'Folder scope',
    },
    project: {
      type: ProjectDetails,
      description: 'Project details, present only for project folders',
    },
    space: {
      type: 'Boolean',
      description: 'Is folder a space',
    },
    metadata: {
      type: KeyValue.NonNull.List,
      description: 'Folder metadata entries',
    },
    hasAttachments: {
      type: 'Boolean',
      description: 'Has attachments',
    },
    attachmentCount: {
      type: 'Int',
      description: 'Attachment count',
    },
    description: {
      type: 'String',
      description: 'Description',
    },
    briefDescription: {
      type: 'String',
      description: 'Brief description',
    },
    customFields: {
      type: () => CustomFieldTC.NonNull.List,
      description: 'Custom fields',
    },
    customColumnIds: {
      type: CustomFieldID.NonNull.List,
      description: 'Associated custom field IDs',
    },
    superParentIds: {
      type: FolderID.NonNull.List,
      description:
        "List of super parent folder IDs (applicable to 'Selective Sharing' labs feature)",
    },
    contractType: {
      type: ProjectContractTypeEnum,
      description: 'Contract type',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  FolderTC.addFields({
    childs: () => getRelationFolderIds('childIds'),
    superParents: () => getRelationFolderIds('superParentIds'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  FolderTC.addFields({
    tasks: () => getRelationTasksByFolderId('id'),
    comments: () => getRelationCommentsByFolderId('id'),
    timelogs: () => getRelationTimelogsByFolderId('id'),
    attachments: () => getRelationAttachmentsByFolderId('id'),
    approvals: () => getRelationApprovalsByFolderId('id'),
  });
}

import { FolderID, CustomFieldID } from 'app/schema/types/Scalars';
import { ColorEnum, TreeScopeEnum, ContractTypeEnum } from '../types/Enums';
import { schemaComposer } from 'graphql-compose';
import { ProjectDetails } from '../types/outputs/ProjectDetails';
import { KeyValue } from '../types/outputs/KeyValue';
import { CustomField } from '../types/outputs/CustomField';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';

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
    childIds: FolderID.NonNull.List.NonNull,
    childs: {
      type: () => FolderTC.NonNull.List,
      resolve: (s, _, __, info) => folderFindByIds({ ids: s.childIds, info }),
      projection: { childIds: 1 },
    },
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
      type: CustomField.NonNull.List,
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
    superParents: {
      type: () => FolderTC.NonNull.List,
      resolve: (s, _, __, info) => folderFindByIds({ ids: s.superParentIds, info }),
      projection: { superParentIds: 1 },
    },
    contractType: {
      type: ContractTypeEnum,
      description: 'Contract type',
    },
  },
});

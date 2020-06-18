import {
  TaskStatusEnum,
  TaskImportanceEnum,
  TaskDatesTypeEnum,
  TreeScopeEnum,
} from 'app/schema/types/Enums';
import {
  TaskID,
  ContactID,
  FolderID,
  CustomStatusID,
  DependencyID,
  AccountID,
} from 'app/schema/types/Scalars';
import { getRelationFolderIds } from 'app/schema/relations/folder';
import { getRelationContactIds } from 'app/schema/relations/contact';
import { getRelationAccountId } from 'app/schema/relations/account';
import { getRelationCommentsByTaskId } from 'app/schema/relations/comment';
import {
  getRelationDependenciesByTaskId,
  getRelationDependencyIds,
} from 'app/schema/relations/dependency';
import { getRelationTimelogsByTaskId } from 'app/schema/relations/timelog';
import { getRelationAttachmentsByTaskId } from 'app/schema/relations/attachment';
import { getRelationApprovalsByTaskId } from 'app/schema/relations/approval';
import { KeyValue } from 'app/schema/types/outputs/KeyValue';
import { CustomFieldValue } from 'app/schema/types/outputs/CustomFieldValue';
import { getRelationTaskIds } from 'app/schema/relations/task';
import { schemaComposer } from 'graphql-compose';

// https://developers.wrike.com/api/v4/tasks/
export const TaskTC = schemaComposer.createObjectTC({
  name: 'Task',
  fields: {
    id: TaskID.NonNull,
    accountId: {
      type: AccountID.NonNull,
      description: 'Account ID',
    },
    title: {
      type: 'String!',
      description: 'Title, cannot be empty',
    },
    description: {
      type: 'String',
      description: 'Description',
    },
    briefDescription: {
      type: 'String',
      description: 'Brief description',
    },
    parentIds: {
      type: FolderID.NonNull.List,
      description: 'List of task parent folder IDs',
    },
    superParentIds: {
      type: FolderID.NonNull.List,
      description: 'List of folder IDs inherited from parent task',
    },
    sharedIds: {
      type: ContactID.NonNull.List,
      description: 'List of user IDs, who share the task',
    },
    responsibleIds: {
      type: ContactID.NonNull.List,
      description: 'List of responsible user IDs',
    },
    status: {
      type: TaskStatusEnum,
      description: 'Status of task',
    },
    importance: {
      type: TaskImportanceEnum,
      description: 'Importance of task',
    },
    createdDate: {
      type: 'Date!',
      description: 'Created date',
    },
    updatedDate: {
      type: 'Date!',
      description: 'Updated date',
    },
    completedDate: {
      type: 'Date!',
      description: 'Completed date, field is present for tasks with `Completed` status',
    },
    dates: {
      description: 'Task dates',
      type: schemaComposer.createObjectTC({
        name: 'TaskDates',
        fields: {
          type: TaskDatesTypeEnum,
          duration: {
            type: 'Int',
            description:
              'Duration in minutes. Duration is present in Planned tasks and is optional for Backlog tasks',
          },
          start: {
            type: 'Date',
            description: 'Start date is present only in Planned tasks',
          },
          due: {
            type: 'Date',
            description: 'Due date is present only in Planned and Milestone tasks',
          },
          workOnWeekends: {
            type: 'Boolean',
            description: 'Weekends are included in task scheduling',
          },
        },
      }),
    },
    scope: {
      type: TreeScopeEnum.NonNull,
      description: 'Task scope',
    },
    authorIds: {
      type: ContactID.NonNull.List,
      description: 'List of author IDs (currently contains 1 element)',
    },
    customStatusId: {
      type: CustomStatusID,
      description: 'Custom status ID',
    },
    hasAttachments: {
      type: 'Boolean',
      description: 'Has attachments',
    },
    attachmentCount: {
      type: 'Int',
      description: 'Total count of task attachments',
    },
    permalink: {
      type: 'String',
      description: 'Link to open task in web workspace, if user has appropriate access',
    },
    priority: {
      type: 'String',
      description: 'Ordering key that defines task order in tasklist',
    },
    followedByMe: {
      type: 'Boolean',
      description: 'Is a task followed by me',
    },
    followerIds: {
      type: ContactID.NonNull.List,
      description: 'List of user IDs, who follows task',
    },
    recurrent: {
      type: 'Boolean',
      description: 'Is a task recurrent',
    },
    superTaskIds: {
      type: TaskID.NonNull.List,
      description: 'List of super task IDs',
    },
    subTaskIds: {
      type: TaskID.NonNull.List,
      description: 'List of subtask IDs',
    },
    dependencyIds: {
      type: DependencyID.NonNull.List,
      description: 'List of dependency IDs',
    },
    metadata: {
      type: KeyValue.NonNull.List,
      description: 'List of task metadata entries',
    },
    customFields: {
      type: CustomFieldValue.NonNull.List,
      description: 'Custom fields',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  TaskTC.addFields({
    account: () => getRelationAccountId('accountId'),
    parents: () => getRelationFolderIds('parentIds'),
    superParents: () => getRelationFolderIds('superParentIds'),
    shareds: () => getRelationContactIds('sharedIds'),
    responsibles: () => getRelationContactIds('responsibleIds'),
    authors: () => getRelationContactIds('authorIds'),
    followers: () => getRelationContactIds('followerIds'),
    superTasks: () => getRelationTaskIds('superTaskIds'),
    subTasks: () => getRelationTaskIds('subTaskIds'),
    dependencies: () => getRelationDependencyIds('dependencyIds'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  TaskTC.addFields({
    comments: getRelationCommentsByTaskId('id'),
    dependencies: getRelationDependenciesByTaskId('id'),
    timelogs: getRelationTimelogsByTaskId('id'),
    attachments: getRelationAttachmentsByTaskId('id'),
    approvals: getRelationApprovalsByTaskId('id'),
  });
}

import { schemaComposer } from 'graphql-compose';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from './TaskEnums';
import { ContactID, FolderID, TaskID, CustomStatusID } from './Scalars';
import { KeyValueITC } from './KeyValueITC';
import { CustomFieldValueITC } from './CustomFieldValueITC';

export const TaskCreateInput = schemaComposer.createInputTC({
  name: 'TaskCreateInput',
  fields: {
    title: 'String',
    description: 'String',
    status: TaskStatusEnum,
    importance: TaskImportanceEnum,
    dates: schemaComposer.createInputTC({
      name: 'TaskDatesInput',
      fields: {
        type: TaskDatesTypeEnum,
        duration: 'Int',
        start: { type: 'String', description: 'yyyy-MM-ddTHH:mm:ss' },
        due: { type: 'String', description: 'yyyy-MM-ddTHH:mm:ss' },
        workOnWeekends: 'Boolean',
      },
    }),
    shareds: [ContactID],
    parents: [FolderID],
    responsibles: [ContactID],
    followers: [ContactID],
    follow: 'Boolean',
    priorityBefore: TaskID,
    priorityAfter: TaskID,
    superTasks: [TaskID],
    metadata: [KeyValueITC],
    customFields: [CustomFieldValueITC],
    customStatus: CustomStatusID,
  },
});

export const TaskUpdateInput = TaskCreateInput.clone('TaskUpdateInput').removeField([
  'parents',
  'shareds',
  'responsibles',
  'followers',
]);

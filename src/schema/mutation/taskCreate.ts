import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID, ContactID, TaskID, CustomStatusID } from 'app/schema/types/Scalars';
import { create, TaskCreateArgs } from 'app/vendor/task/create';
import { schemaComposer } from 'graphql-compose';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from '../types/Enums';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { CustomFieldValueInput } from '../types/inputs/CustomFieldValueInput';

export const TaskCreateInput = schemaComposer.createInputTC({
  name: 'TaskCreateInput',
  fields: {
    title: 'String!',
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
    shareds: ContactID.NonNull.List,
    parents: FolderID.NonNull.List,
    responsibles: ContactID.NonNull.List,
    followers: ContactID.NonNull.List,
    follow: 'Boolean',
    priorityBefore: TaskID,
    priorityAfter: TaskID,
    superTasks: TaskID.NonNull.List,
    metadata: KeyValueInput.NonNull.List,
    customFields: CustomFieldValueInput.NonNull.List,
    customStatus: CustomStatusID,
  },
});

export default {
  type: TaskTC,
  args: {
    folderId: FolderID.NonNull,
    task: TaskCreateInput.NonNull,
  },
  resolve: (_, args) => {
    return create(args);
  },
} as FieldConfig<TaskCreateArgs>;

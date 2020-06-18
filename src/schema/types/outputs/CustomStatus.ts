import { schemaComposer } from 'graphql-compose';
import { StatusColorEnum, TaskStatusEnum } from 'app/schema/types/Enums';
import { CustomStatusID } from 'app/schema/types/Scalars';

export const CustomStatus = schemaComposer.createObjectTC({
  name: 'CustomStatus',
  fields: {
    id: CustomStatusID.NonNull,
    name: {
      type: 'String!',
      description: 'Name (128 symbols max)',
    },
    standardName: {
      type: 'Boolean!',
      description: 'Whether status name is default or not',
    },
    color: {
      type: StatusColorEnum,
      description: 'Color name',
    },
    standard: {
      type: 'Boolean!',
      description: 'Defines default custom status (ignored in requests)',
    },
    group: {
      type: TaskStatusEnum.NonNull,
      description: 'Custom status group',
    },
    hidden: {
      type: 'Boolean!',
      description: 'Custom status is hidden',
    },
  },
});

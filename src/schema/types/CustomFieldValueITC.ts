import { schemaComposer } from 'graphql-compose';
import { CustomFieldID } from './Scalars';

export const CustomFieldValueITC = schemaComposer.createInputTC({
  name: 'CustomFieldValueInput',
  fields: {
    id: {
      type: CustomFieldID,
      description: 'Custom Field ID',
    },
    value: {
      type: 'String',
      description: 'Custom field value. 2000 characters max',
    },
  },
});

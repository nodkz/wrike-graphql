import { schemaComposer } from 'graphql-compose';
import { CustomFieldID } from '../Scalars';

export const CustomFieldValueInput = schemaComposer.createInputTC({
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

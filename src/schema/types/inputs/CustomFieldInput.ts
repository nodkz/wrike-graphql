import { schemaComposer } from 'graphql-compose';
import { CustomFieldComparatorEnum } from '../Enums';
import { CustomFieldID } from '../Scalars';

export const CustomFieldInput = schemaComposer.createInputTC({
  name: 'CustomFieldInput',
  fields: {
    id: CustomFieldID.NonNull,
    comparator: {
      type: CustomFieldComparatorEnum,
      description: 'Custom field comparator',
    },
    value: {
      type: 'String',
      description: 'Custom field value',
    },
    minValue: {
      type: 'String',
      description: 'Custom field min value',
    },
    maxValue: {
      type: 'String',
      description: 'Custom field max value',
    },
    values: {
      type: '[String!]',
      description: 'Custom field possible values',
    },
  },
});

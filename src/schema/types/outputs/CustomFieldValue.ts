import { schemaComposer } from 'graphql-compose';
import { CustomFieldID } from '../Scalars';
import { getCustomFieldId } from 'app/schema/relations/customField';

export const CustomFieldValue = schemaComposer.createObjectTC({
  name: 'CustomFieldValue',
  fields: {
    id: {
      type: CustomFieldID.NonNull,
      description: 'Custom Field ID.',
    },
    value: {
      type: 'String',
      description: 'Custom field value. 2000 characters max',
    },
  },
});

if (!process.env.DISABLE_BACK_RELATIONS) {
  CustomFieldValue.addFields({
    entity: () => getCustomFieldId('id'),
  });
}

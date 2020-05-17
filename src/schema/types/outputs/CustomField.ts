import { schemaComposer } from 'graphql-compose';
import { CustomFieldTypeEnum } from '../Enums';
import { CustomFieldID, AccountID, ContactID } from '../Scalars';

export const CustomField = schemaComposer.createObjectTC({
  name: 'CustomField',
  fields: {
    id: CustomFieldID.NonNull,
    accountId: AccountID.NonNull,
    title: {
      type: 'String!',
      description: 'Custom field title',
    },
    type: {
      type: CustomFieldTypeEnum.NonNull,
      description: 'Custom field type',
    },
    sharedIds: {
      type: ContactID.NonNull.List,
      description: 'List of user IDs, who share the custom field',
    },
    settings: {
      type: 'JSON',
      description: 'Custom field settings',
    },
  },
});

import { schemaComposer } from 'graphql-compose';
import { CustomFieldTypeEnum } from '../types/Enums';
import { CustomFieldID, AccountID, ContactID } from '../types/Scalars';
import { CustomFieldSettings } from '../types/outputs/CustomFieldSettings';
import { getRelationAccountId } from '../relations/account';
import { getRelationContactIds } from '../relations/contact';

export const CustomFieldTC = schemaComposer.createObjectTC({
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
      type: CustomFieldSettings,
      description: 'Custom field settings',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  CustomFieldTC.addFields({
    account: () => getRelationAccountId('accountId'),
    shareds: () => getRelationContactIds('sharedIds'),
  });
}

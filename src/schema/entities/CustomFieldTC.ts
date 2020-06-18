import { schemaComposer } from 'graphql-compose';
import { CustomFieldTypeEnum } from 'app/schema/types/Enums';
import { CustomFieldID, AccountID, ContactID } from 'app/schema/types/Scalars';
import { CustomFieldSettings } from 'app/schema/types/outputs/CustomFieldSettings';
import { getRelationAccountId } from 'app/schema/relations/account';
import { getRelationContactIds } from 'app/schema/relations/contact';

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

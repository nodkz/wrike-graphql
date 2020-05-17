import { schemaComposer } from 'graphql-compose';
import { SubscriptionTypeEnum } from './Enums';

export const AccountSubscriptionTC = schemaComposer.createObjectTC({
  name: 'AccountSubscription',
  fields: {
    type: SubscriptionTypeEnum.NonNull,
    suspended: 'Boolean!',
    paid: {
      type: 'Boolean!',
      description: 'Subscription is paid (available only to account admins)',
    },
    userLimit: {
      type: 'Int!',
      description: 'Limit of subscription users (available only to account admins)',
    },
  },
});

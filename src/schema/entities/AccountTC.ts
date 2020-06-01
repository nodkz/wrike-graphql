import { FolderID, AccountID } from 'app/schema/types/Scalars';
import { WeekDayEnum, FirstDayOfWeekEnum } from '../types/Enums';
import { schemaComposer } from 'graphql-compose';
import { KeyValue } from '../types/outputs/KeyValue';
import { AccountSubscription } from '../types/outputs/AccountSubscription';
import { CustomFieldTC } from './CustomFieldTC';
import { getRelationFolderId } from '../relations/folder';

export const AccountTC = schemaComposer.createObjectTC({
  name: 'Account',
  fields: {
    id: AccountID.NonNull,
    name: {
      type: 'String!',
      description: 'Name of account',
    },
    dateFormat: {
      type: 'String!',
      description: 'Date format: dd/MM/yyyy or MM/dd/yyyy',
    },
    firstDayOfWeek: FirstDayOfWeekEnum.NonNull,
    workDays: {
      type: WeekDayEnum.NonNull.List.NonNull,
      description: 'List of weekdays, not empty. These days are used in task duration computation',
    },
    rootFolderId: {
      type: FolderID.NonNull,
      description:
        "Virtual folder, denotes the root folder of the account. Different users can have different elements in the root, according to their sharing scope. Can be used in queries to get all folders/tasks in the account, or to create folders/tasks in the user's account root",
    },
    recycleBinId: {
      type: FolderID.NonNull,
      description:
        'Virtual folder, denotes the root for deleted folders and tasks. Can be used in queries to get all folders/tasks in the Recycle Bin. Cannot be used in modification queries.',
    },
    createdDate: {
      type: 'Date!',
      description: 'Registration date',
    },
    subscription: {
      type: AccountSubscription,
      description: 'Account subscription',
    },
    metadata: {
      type: KeyValue.NonNull.List,
      description:
        'List of account metadata entries. Entries could be read by all users of account and modified by admins only',
    },
    customFields: {
      type: CustomFieldTC.NonNull.List,
      description: 'List of custom fields accessible for requesting user in the account',
    },
    joinedDate: {
      type: 'Date!',
      description: 'List of custom fields accessible for requesting user in the account',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  AccountTC.addFields({
    rootFolder: () => getRelationFolderId('rootFolderId'),
    recycleBin: () => getRelationFolderId('recycleBinId'),
  });
}

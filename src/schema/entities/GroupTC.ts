import { composeWithJson } from 'graphql-compose-json';
import { GroupID, ContactID, AccountID } from 'app/schema/types/Scalars';
import { KeyValue } from '../types/outputs/KeyValue';
import { AccountTC } from './AccountTC';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';
import { ContactTC } from './ContactTC';

const restApiResponse = {
  id: GroupID.NonNull,
  accountId: AccountID.NonNull,
  title: 'New test group',
  memberIds: ContactID.NonNull.List,
  childIds: ContactID.NonNull.List,
  parentIds: ContactID.NonNull.List,
  avatarUrl: '/98/14/Circle_ffe9c7a0_78-71_v1.png',
  myTeam: true,
  metadata: KeyValue.NonNull.List,
};

export const GroupTC = composeWithJson('Group', restApiResponse);

if (!process.env.DISABLE_HAIRS) {
  GroupTC.addFields({
    account: {
      type: () => AccountTC,
      resolve: (s, _, __, info) => accountFindOne({ info }),
    },
    members: {
      type: () => ContactTC.List,
      resolve: (s, _, __, info) => contactFindByIds({ ids: s.memberIds, info }),
      prjection: { memberIds: 1 },
    },
    childs: {
      type: () => ContactTC.List,
      resolve: (s, _, __, info) => contactFindByIds({ ids: s.childIds, info }),
      prjection: { childIds: 1 },
    },
    parents: {
      type: () => ContactTC.NonNull.List,
      resolve: (s, _, __, info) => contactFindByIds({ ids: s.parentIds, info }),
      prjection: { parentIds: 1 },
    },
  });
}

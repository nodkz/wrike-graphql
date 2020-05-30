import { composeWithJson } from 'graphql-compose-json';
import { InvitationID, AccountID, ContactID } from 'app/schema/types/Scalars';
import { InvitationStatusEnum, UserRoleEnum } from '../types/Enums';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { userFindById } from 'app/vendor/user/userFindById';
import { AccountTC } from './AccountTC';
import { UserTC } from './UserTC';

const restApiResponse = {
  id: InvitationID.NonNull,
  accountId: AccountID.NonNull,
  firstName: 'Wrike',
  lastName: 'Bot',
  email: 'robot3246automation@wrike-robot.com',
  status: InvitationStatusEnum,
  inviterUserId: ContactID,
  invitationDate: '2020-03-25T11:36:54Z',
  resolvedDate: '2020-03-25T11:36:54Z',
  role: UserRoleEnum,
  external: true,
};

export const InvitationTC = composeWithJson('Invitation', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  InvitationTC.addFields({
    account: {
      type: () => AccountTC,
      resolve: (s, _, __, info) => accountFindOne({ info }),
    },
    inviterUser: {
      type: () => UserTC,
      resolve: (s) => userFindById({ id: s.inviterUserId }),
      projection: { inviterUserId: 1 },
    },
  });
}

import { composeWithJson } from 'graphql-compose-json';
import { InvitationID, AccountID, ContactID } from 'app/schema/types/Scalars';
import { InvitationStatusEnum, UserRoleEnum } from '../types/Enums';
import { getRelationAccountId } from '../resolvers/account';
import { getRelationContactId } from '../resolvers/contact';

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
    account: getRelationAccountId('accountId'),
    inviterUser: getRelationContactId('inviterUserId'),
  });
}

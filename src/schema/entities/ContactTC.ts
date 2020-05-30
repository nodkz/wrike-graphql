import { composeWithJson } from 'graphql-compose-json';
import { UserTypeEnum, UserRoleEnum } from 'app/schema/types/Enums';
import { ContactID, WorkScheduleID, AccountID } from 'app/schema/types/Scalars';
import { KeyValue } from '../types/outputs/KeyValue';
import { getRelationAccountId } from '../resolvers/account';
import { getRelationContactIds } from '../resolvers/contact';
import { getRelationWorkScheduleId } from '../resolvers/workSchedule';

const restApiResponse = {
  // id: 'KUAHNM4I',
  id: ContactID.NonNull,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  // type: 'Person',
  type: UserTypeEnum,
  profiles: [
    {
      // accountId: 'IEADMUW4',
      accountId: AccountID,
      email: 'nodkz@mail.ru',
      // role: 'User',
      role: UserRoleEnum,
      external: true,
      admin: false,
      owner: false,
    },
  ],
  avatarUrl: 'https://www.wrike.com/avatars//88/89/Box_ff1e88e5_73-73_v1.png',
  timezone: 'Asia/Almaty',
  locale: 'en',
  deleted: false,
  me: false,
  memberIds: ContactID.NonNull.List,
  metadata: KeyValue.NonNull.List,
  myTeam: false,
  title: 'bot',
  companyName: 'aaa',
  phone: '+77777',
  location: 'ALA',
  workScheduleId: WorkScheduleID,
};

export const ContactTC = composeWithJson('Contact', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  ContactTC.addNestedFields({
    'profiles.account': getRelationAccountId('accountId'),
    members: () => getRelationContactIds('memberIds'),
    workSchedule: getRelationWorkScheduleId('workScheduleId'),
  });
}

// TODO: copy backlinks from UserTC

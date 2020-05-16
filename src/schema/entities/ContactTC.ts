import { composeWithJson } from 'graphql-compose-json';
import { UserTypeEnum, UserRoleEnum } from 'app/schema/types/Enums';
import { ContactID, WorkScheduleID, AccountID } from 'app/schema/types/Scalars';
import { KeyValueTC } from '../types/KeyValueTC';

const restApiResponse = {
  // id: 'KUAHNM4I',
  id: () => ContactID,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  // type: 'Person',
  type: () => UserTypeEnum,
  profiles: [
    {
      // accountId: 'IEADMUW4',
      accountId: () => AccountID,
      email: 'nodkz@mail.ru',
      // role: 'User',
      role: () => UserRoleEnum,
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
  memberIds: () => ContactID.List,
  metadata: () => KeyValueTC.List,
  myTeam: false,
  title: 'bot',
  companyName: 'aaa',
  phone: '+77777',
  location: 'ALA',
  workScheduleId: () => WorkScheduleID,
};

export const ContactTC = composeWithJson('Contact', restApiResponse);

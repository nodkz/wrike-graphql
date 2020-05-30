import { composeWithJson } from 'graphql-compose-json';
import { ContactID, AccountID, WorkScheduleID } from 'app/schema/types/Scalars';
import { UserRoleEnum } from '../types/Enums';
import { getRelationAccountId } from '../resolvers/account';
import { getRelationWorkScheduleId } from '../resolvers/workSchedule';

const restApiResponse = {
  // id: 'KUAHMNRA',
  id: ContactID.NonNull,
  firstName: 'Pavel',
  lastName: 'Chertorogov',
  type: 'Person',
  profiles: [
    {
      // accountId: 'IEADMUW4',
      accountId: AccountID,
      email: 'pavel.chertorogov@gmail.com',
      // role: 'User',
      role: UserRoleEnum,
      external: false,
      admin: false,
      owner: true,
    },
  ],
  avatarUrl: 'https://www.wrike.com/avatars//77/A8/Box_ffe57373_80-67_v1.png',
  timezone: 'US/Pacific',
  locale: 'en',
  deleted: false,
  me: true,
  myTeam: false,
  title: 'IT',
  companyName: 'Test',
  phone: '+77777',
  location: 'ALA',
  workScheduleId: WorkScheduleID,
};

export const UserTC = composeWithJson('User', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  UserTC.addNestedFields({
    'profiles.account': getRelationAccountId('accountId'),
    workSchedule: getRelationWorkScheduleId('workScheduleId'),
  });
}

// TODO: ------- BACK LINKS --------
// UserTC.addFields({
//   tasksAuthored: {
//     type: () => TaskTC.NonNull.List,
//     args: {
//       limit: { type: 'Int', defaultValue: 10 },
//     },
//     resolve: (s, args, __, info) =>
//       taskFindMany({ filter: { authors: [s.id] }, limit: args.limit, info }),
//   },
//   tasksResponsible: {
//     type: () => TaskTC.NonNull.List,
//     args: {
//       limit: { type: 'Int', defaultValue: 10 },
//     },
//     resolve: (s, args, __, info) =>
//       taskFindMany({ filter: { responsibles: [s.id] }, limit: args.limit, info }),
//   },
// });

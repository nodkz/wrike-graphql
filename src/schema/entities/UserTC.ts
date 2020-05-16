import { composeWithJson } from 'graphql-compose-json';
import { TaskTC } from './TaskTC';
import { findMany } from 'app/vendor/task/findMany';
import { ContactID } from 'app/schema/types/Scalars';

const restApiResponse = {
  // id: 'KUAHMNRA',
  id: () => ContactID,
  firstName: 'Pavel',
  lastName: 'Chertorogov',
  type: 'Person',
  profiles: [
    {
      accountId: 'IEADMUW4',
      email: 'pavel.chertorogov@gmail.com',
      role: 'User',
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
  title: 'IT',
  companyName: 'Test',
  // additional fields
  tasksAuthored: () => ({
    type: () => [TaskTC],
    resolve: (s, _, __, info) => findMany({ filter: { authors: [s.id] }, info }),
  }),
  tasksResponsible: () => ({
    type: () => [TaskTC],
    resolve: (s, _, __, info) => findMany({ filter: { responsibles: [s.id] }, info }),
  }),
};

export const UserTC = composeWithJson('User', restApiResponse);

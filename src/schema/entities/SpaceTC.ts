import composeWithJson from 'graphql-compose-json';
import { TaskTC } from './TaskTC';
import { findMany } from 'app/vendor/task/findMany';

const restApiResponse = {
  id: 'IEADMUW4I4OE37IV',
  title: 'HolyJS Talk',
  avatarUrl: 'https://www.wrike.com/static/spaceicons/1/1-2600.png',
  accessType: () => `enum SpaceAccessType { Personal Private Public}`,
  archived: false,
  // additional fields
  tasks: () => ({
    type: [TaskTC],
    resolve: (s, _, __, info) => {
      return findMany({ filter: { spaceId: s.id }, info });
    },
  }),
};

export const SpaceTC = composeWithJson('Space', restApiResponse);

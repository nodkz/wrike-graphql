import { composeWithJson } from 'graphql-compose-json';
import { TaskTC } from './TaskTC';
import { taskFindMany } from 'app/vendor/task/taskFindMany';
import { SpaceID } from 'app/schema/types/Scalars';
import { SpaceAccessTypeEnum } from '../types/Enums';

const restApiResponse = {
  // id: 'IEADMUW4I4OE37IV',
  id: SpaceID.NonNull,
  title: 'HolyJS Talk',
  avatarUrl: 'https://www.wrike.com/static/spaceicons/1/1-2600.png',
  accessType: SpaceAccessTypeEnum,
  archived: false,
};

export const SpaceTC = composeWithJson('Space', restApiResponse);

if (!process.env.DISABLE_HAIRS) {
  SpaceTC.addFields({
    tasks: {
      type: () => TaskTC.NonNull.List,
      resolve: (s, _, __, info) => {
        return taskFindMany({ filter: { spaceId: s.id }, info });
      },
    },
  });
}

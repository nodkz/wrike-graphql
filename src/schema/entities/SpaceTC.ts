import { composeWithJson } from 'graphql-compose-json';
import { SpaceID } from 'app/schema/types/Scalars';
import { SpaceAccessTypeEnum } from 'app/schema/types/Enums';
import { getRelationTasksBySpaceId } from 'app/schema/relations/task';
import { getRelationFoldersBySpaceId } from 'app/schema/relations/folder';

const restApiResponse = {
  // id: 'IEADMUW4I4OE37IV',
  id: SpaceID.NonNull,
  title: 'HolyJS Talk',
  avatarUrl: 'https://www.wrike.com/static/spaceicons/1/1-2600.png',
  accessType: SpaceAccessTypeEnum,
  archived: false,
};

export const SpaceTC = composeWithJson('Space', restApiResponse);

if (!process.env.DISABLE_BACK_RELATIONS) {
  SpaceTC.addFields({
    tasks: () => getRelationTasksBySpaceId('id'),
    folders: () => getRelationFoldersBySpaceId('id'),
  });
}

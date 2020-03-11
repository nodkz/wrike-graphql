import { findMany } from 'app/vendor/space/findMany';
import { SpaceTC } from '../entities/SpaceTC';

export default {
  type: [SpaceTC],
  args: {
    filter: `input SpaceFindManyFilter { 
      withArchived: Boolean
      userIsMember: Boolean
    }`,
  },
  resolve: (_, args) => {
    return findMany(args);
  },
};

import { findMany } from 'app/vendor/space/findMany';
import { SpaceTC } from 'app/schema/entities/SpaceTC';
import { FieldConfig } from 'app/schema/definitions';

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
} as FieldConfig;

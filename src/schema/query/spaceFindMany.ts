import { spaceFindMany } from 'app/vendor/space/spaceFindMany';
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
    return spaceFindMany(args);
  },
} as FieldConfig;

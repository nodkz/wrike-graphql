import { groupFindById } from 'app/vendor/group/groupFindById';
import { GroupTC } from 'app/schema/entities/GroupTC';
import { GroupID } from 'app/schema/types/Scalars';
import { FieldConfig } from 'app/schema/definitions';

export default {
  args: { id: GroupID.NonNull },
  type: GroupTC,
  resolve: (_, args, context, info) => {
    return groupFindById({ id: args.id, info });
  },
} as FieldConfig;

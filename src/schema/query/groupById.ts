import { findById } from 'app/vendor/group/findById';
import { GroupTC } from 'app/schema/entities/GroupTC';
import { GroupID } from 'app/schema/types/Scalars';
import { FieldConfig } from 'app/schema/definitions';

export default {
  args: { id: GroupID.NonNull },
  type: GroupTC,
  resolve: (_, args, context, info) => {
    return findById({ id: args.id, info });
  },
} as FieldConfig;

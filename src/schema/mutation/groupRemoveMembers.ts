import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { GroupID, ContactID } from 'app/schema/types/Scalars';
import { groupUpdate } from 'app/vendor/group/groupUpdate';

export default {
  type: GroupTC,
  args: {
    id: GroupID.NonNull,
    members: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return groupUpdate({ id: args.is, group: { removeMembers: args.members } });
  },
} as FieldConfig;

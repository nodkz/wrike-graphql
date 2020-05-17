import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { GroupID, ContactID } from 'app/schema/types/Scalars';
import { update } from 'app/vendor/group/update';
import { GroupCreateInput } from './groupCreate';

export const GroupUpdateInput = GroupCreateInput.clone('TaskUpdateInput')
  .removeField('members')
  .makeFieldNullable('title');

export default {
  type: GroupTC,
  args: {
    id: GroupID.NonNull,
    members: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return update({ id: args.is, group: { removeMembers: args.members } });
  },
} as FieldConfig;

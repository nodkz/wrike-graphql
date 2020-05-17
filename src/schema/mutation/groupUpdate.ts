import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { GroupID } from 'app/schema/types/Scalars';
import { update, UpdateArgs } from 'app/vendor/group/update';
import { GroupCreateInput } from './groupCreate';

export const GroupUpdateInput = GroupCreateInput.clone('TaskUpdateInput')
  .removeField('members')
  .makeFieldNullable('title');

export default {
  type: GroupTC,
  args: {
    id: GroupID.NonNull,
    group: GroupUpdateInput.NonNull,
  },
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<UpdateArgs>;

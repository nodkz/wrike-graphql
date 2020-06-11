import { InvitationTC } from 'app/schema/entities/InvitationTC';
import { FieldConfig } from 'app/schema/definitions';
import { groupCreate, CreateArgs } from 'app/vendor/group/groupCreate';
import { schemaComposer } from 'graphql-compose';
import { UserRoleEnum } from '../types/Enums';

export const InvitationCreateInput = schemaComposer.createInputTC({
  name: 'InvitationCreateInput',
  fields: {
    email: 'String!',
    firstName: 'String',
    lastName: 'String',
    role: {
      type: UserRoleEnum,
      defaultValue: 'User',
    },
    external: {
      type: 'Boolean',
      defaultValue: false,
      description:
        "Set external flag for invited user. Flag 'External' can be applied only to the role 'User'",
    },
    subject: 'String',
    message: 'String',
  },
});

export default {
  type: InvitationTC,
  args: {
    group: InvitationCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return groupCreate(args, context);
  },
} as FieldConfig<CreateArgs>;

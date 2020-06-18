import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { contactFindMany } from 'app/vendor/contact/contactFindMany';

export default {
  type: ContactTC.NonNull,
  resolve: async (_, args, context, info) => {
    const data = await contactFindMany({ filter: { me: true }, info }, context);
    return data[0];
  },
} as FieldConfig;

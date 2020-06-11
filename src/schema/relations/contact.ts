import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { ContactTC } from '../entities/ContactTC';
import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';

export function getRelationContactIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ContactTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, context, info) =>
          contactFindByIds({ ids: source[sourceFieldName], info }, context)
      : resolveManyViaDL('ContactID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 3,
    },
  };
}

export function getRelationContactId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ContactTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, context, info) => {
          const records = await contactFindByIds(
            {
              ids: source[sourceFieldName],
              info,
            },
            context
          );
          return records?.[0];
        }
      : resolveOneViaDL('ContactID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

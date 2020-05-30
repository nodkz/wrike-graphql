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
      ? (source, _, __, info) => contactFindByIds({ ids: source[sourceFieldName], info })
      : resolveManyViaDL('ContactID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationContactId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => ContactTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, __, info) => {
          const records = await contactFindByIds({
            ids: source[sourceFieldName],
            info,
          });
          return records?.[0];
        }
      : resolveOneViaDL('ContactID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { CustomFieldTC } from '../entities/CustomFieldTC';
import { customFieldFindByIds } from 'app/vendor/customFields/customFieldFindByIds';
import { resolveOneViaDL } from '../dataLoaders';

export function getCustomFieldId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => CustomFieldTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, context) => {
          const rows = await customFieldFindByIds({ ids: [source[sourceFieldName]] }, context);
          return rows?.[0];
        }
      : resolveOneViaDL('CustomFieldID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

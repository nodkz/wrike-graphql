import { resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { TimelogCategoryTC } from '../entities/TimelogCategoryTC';
import { timelogCategoryFindMany } from 'app/vendor/timelogCategory/timelogCategoryFindMany';

export function getRelationTimelogCategoryId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogCategoryTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source) => {
          const records = await timelogCategoryFindMany();
          return records.find((x) => x.id === source[sourceFieldName]);
        }
      : resolveOneViaDL('TimelogCategoryID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

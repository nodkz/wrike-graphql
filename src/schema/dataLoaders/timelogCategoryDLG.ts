import DataLoader from 'dataloader';
import { timelogCategoryFindMany } from 'app/vendor/timelogCategory/timelogCategoryFindMany';

export function timelogCategoryDLG() {
  return new DataLoader<string, any>(async (ids) => {
    const results = await timelogCategoryFindMany();
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`TimelogCategory: no result for ${id}`)
    );
  });
}

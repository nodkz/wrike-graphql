import DataLoader from 'dataloader';
import { customFieldFindByIds } from 'app/vendor/customFields/customFieldFindByIds';

export function customFieldDLG(context: any) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await customFieldFindByIds({ ids }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`CustomField: no result for ${id}`)
    );
  });
}

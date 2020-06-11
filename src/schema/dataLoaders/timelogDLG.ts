import DataLoader from 'dataloader';
import { timelogFindByIds } from 'app/vendor/timelog/timelogFindByIds';

export function timelogDLG(context: any) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await timelogFindByIds({ ids }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Timelog: no result for ${id}`)
    );
  });
}

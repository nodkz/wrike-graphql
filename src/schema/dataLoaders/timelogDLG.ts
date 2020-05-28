import DataLoader from 'dataloader';
import { timelogFindByIds } from 'app/vendor/timelog/timelogFindByIds';

export function timelogDLG() {
  return new DataLoader<string, any>(async (ids) => {
    const results = await timelogFindByIds({ ids });
    return ids.map((id) => results.find((x) => x.id === id) || new Error(`No result for ${id}`));
  });
}

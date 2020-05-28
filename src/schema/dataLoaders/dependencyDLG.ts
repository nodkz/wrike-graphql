import DataLoader from 'dataloader';
import { dependencyFindByIds } from 'app/vendor/dependency/dependencyFindByIds';

export function dependencyDLG() {
  return new DataLoader<string, any>(async (ids) => {
    const results = await dependencyFindByIds({ ids });
    return ids.map((id) => results.find((x) => x.id === id) || new Error(`No result for ${id}`));
  });
}

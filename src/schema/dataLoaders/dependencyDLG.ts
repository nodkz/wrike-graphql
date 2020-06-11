import DataLoader from 'dataloader';
import { dependencyFindByIds } from 'app/vendor/dependency/dependencyFindByIds';

export function dependencyDLG(context: any) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await dependencyFindByIds({ ids }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Dependency: no result for ${id}`)
    );
  });
}

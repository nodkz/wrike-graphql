import DataLoader from 'dataloader';
import { GraphQLResolveInfo } from 'graphql';
import { taskFindByIds } from 'app/vendor/task/taskFindByIds';

export function taskDL(info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await taskFindByIds({ ids, info });
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Task: no result for ${id}`)
    );
  });
}

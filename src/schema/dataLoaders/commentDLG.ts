import DataLoader from 'dataloader';
import { commentFindByIds } from 'app/vendor/comment/commentFindByIds';

export function commentDLG(context: any) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await commentFindByIds({ ids }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Comment: no result for ${id}`)
    );
  });
}

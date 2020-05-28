import DataLoader from 'dataloader';
import { commentFindByIds } from 'app/vendor/comment/commentFindByIds';

export function commentDLG() {
  return new DataLoader<string, any>(async (ids) => {
    const results = await commentFindByIds({ ids });
    return ids.map((id) => results.find((x) => x.id === id) || new Error(`No result for ${id}`));
  });
}

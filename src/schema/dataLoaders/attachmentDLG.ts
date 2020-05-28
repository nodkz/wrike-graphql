import DataLoader from 'dataloader';
import { attachmentFindByIds } from 'app/vendor/attachment/attachmentFindByIds';

export function attachmentDLG() {
  return new DataLoader<string, any>(async (ids) => {
    const results = await attachmentFindByIds({ ids });
    return ids.map((id) => results.find((x) => x.id === id) || new Error(`No result for ${id}`));
  });
}

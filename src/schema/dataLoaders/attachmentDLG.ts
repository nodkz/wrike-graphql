import DataLoader from 'dataloader';
import { attachmentFindByIds } from 'app/vendor/attachment/attachmentFindByIds';

export function attachmentDLG(context: any) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await attachmentFindByIds({ ids }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Attachment: no result for ${id}`)
    );
  });
}

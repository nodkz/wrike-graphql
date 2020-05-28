import DataLoader from 'dataloader';
import { GraphQLResolveInfo } from 'graphql';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';

export function folderDL(info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await folderFindByIds({ ids, info });
    return ids.map((id) => results.find((x) => x.id === id) || new Error(`No result for ${id}`));
  });
}

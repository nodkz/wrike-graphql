import DataLoader from 'dataloader';
import { GraphQLResolveInfo } from 'graphql';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';

export function folderDL(info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await folderFindByIds({ ids, info });
    return ids.map((id) => {
      const r = results.find((x) => x.id === id);
      if (r) return r;
      if (id.endsWith('7777777')) {
        return {
          id,
          title: 'RootFolder',
          scope: 'WsRoot',
        };
      } else if (id.endsWith('7777776')) {
        return {
          id,
          title: 'RecycleBinFolder',
          scope: 'RbRoot',
        };
      }
      return new Error(`Folder: no result for ${id}`);
    });
  });
}

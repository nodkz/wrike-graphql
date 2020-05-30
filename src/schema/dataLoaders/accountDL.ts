import DataLoader from 'dataloader';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { GraphQLResolveInfo } from 'graphql';

// IMPORTANT: THIS IS NOT A REAL DATA LOADER
// This is simple cache for current account data
export function accountDL(info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = [await accountFindOne({ info })];
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Account: no result for ${id}`)
    );
  });
}

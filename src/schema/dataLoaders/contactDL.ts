import DataLoader from 'dataloader';
import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';
import { GraphQLResolveInfo } from 'graphql';

export function contactDL(context: any, info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await contactFindByIds({ ids, info }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`Contact: no result for ${id}`)
    );
  });
}

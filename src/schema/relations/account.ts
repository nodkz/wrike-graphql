import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { AccountTC } from 'app/schema/entities/AccountTC';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { resolveOneViaDL } from 'app/schema/dataLoaders';

export function getRelationAccountId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AccountTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? (s, _, context, info) => accountFindOne({ info }, context)
      : resolveOneViaDL('AccountID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

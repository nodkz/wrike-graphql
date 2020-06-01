import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { AccountTC } from '../entities/AccountTC';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { resolveOneViaDL } from '../dataLoaders';

export function getRelationAccountId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AccountTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? (s, _, __, info) => accountFindOne({ info })
      : resolveOneViaDL('AccountID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

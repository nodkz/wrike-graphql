import { GraphQLClient } from 'graphql-request';
import { getSdk } from './wrikeSdk'; // THIS FILE IS THE GENERATED FILE

async function main() {
  const client = new GraphQLClient('http://localhost:4444/');
  const sdk = getSdk(client);
  const res = await sdk.getFolders();
  console.log(`Data from GraphQL:`, res.folderFindMany?.[0].title);
}

main();

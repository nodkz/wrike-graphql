import { astToSchema, directoryToAst } from 'graphql-compose-modules';
import { schemaComposer } from 'graphql-compose';

const ast = directoryToAst(module);
const sc = astToSchema(ast, { schemaComposer });
sc.Query.setDescription('for Microsoft with ❤️');
sc.Mutation.setDescription('for Google with ❤️');

export const schema = sc.buildSchema();

import { astToSchema, directoryToAst } from 'graphql-compose-modules';

const ast = directoryToAst(module);
const schemaComposer = astToSchema(ast);
schemaComposer.Query.setDescription('for Microsoft with ❤️');
schemaComposer.Mutation.setDescription('for Google with ❤️');

const schema = schemaComposer.buildSchema();
export default schema;

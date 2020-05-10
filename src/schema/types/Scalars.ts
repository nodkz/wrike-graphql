import { schemaComposer } from 'graphql-compose';

export const ContactID = schemaComposer.createScalarTC(`
  scalar ContactID
`);

export const FolderID = schemaComposer.createScalarTC(`
  scalar FolderID
`);

export const TaskID = schemaComposer.createScalarTC(`
  scalar TaskID
`);

export const CustomFieldID = schemaComposer.createScalarTC(`
  scalar CustomFieldID
`);

export const CustomStatusID = schemaComposer.createScalarTC(`
  scalar CustomStatusID
`);

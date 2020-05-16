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

export const SpaceID = schemaComposer.createScalarTC(`
  scalar SpaceID
`);

export const CustomFieldID = schemaComposer.createScalarTC(`
  scalar CustomFieldID
`);

export const CustomStatusID = schemaComposer.createScalarTC(`
  scalar CustomStatusID
`);

export const WorkScheduleID = schemaComposer.createScalarTC(`
  scalar WorkScheduleID
`);

export const AccountID = schemaComposer.createScalarTC(`
  scalar AccountID
`);

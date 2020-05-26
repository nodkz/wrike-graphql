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

export const GroupID = schemaComposer.createScalarTC(`
  scalar GroupID
`);

export const InvitationID = schemaComposer.createScalarTC(`
  scalar InvitationID
`);

export const WorkflowID = schemaComposer.createScalarTC(`
  scalar WorkflowID
`);

export const AsyncJobID = schemaComposer.createScalarTC(`
  scalar AsyncJobID
`);

export const CommentID = schemaComposer.createScalarTC(`
  scalar CommentID
`);

export const DateYMD = schemaComposer.createScalarTC(`
  """Format: yyyy-MM-dd"""  
  scalar DateYMD
`);

export const DependencyID = schemaComposer.createScalarTC(`
  scalar DependencyID
`);

export const TimelogCategoryID = schemaComposer.createScalarTC(`
  scalar TimelogCategoryID
`);

export const TimelogID = schemaComposer.createScalarTC(`
  scalar TimelogID
`);

export const AttachmentID = schemaComposer.createScalarTC(`
  scalar AttachmentID
`);

export const ReviewID = schemaComposer.createScalarTC(`
  scalar ReviewID
`);

export const DataExportID = schemaComposer.createScalarTC(`
  scalar DataExportID
`);

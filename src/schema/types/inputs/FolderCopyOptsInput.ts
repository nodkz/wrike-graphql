import { AsyncJobTC } from 'app/schema/entities/AsyncJobTC';
import { FolderID, ContactID, DateYMD } from 'app/schema/types/Scalars';

export const FolderCopyOptsInput = AsyncJobTC.schemaComposer.createInputTC({
  name: 'FolderCopyOptsInput',
  fields: {
    parent: FolderID.NonNull,
    title: {
      type: 'String!',
      description: 'Title, cannot be empty',
    },
    titlePrefix: {
      type: 'String',
      description: 'Title prefix for all copied tasks',
    },
    copyDescriptions: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Copy descriptions or leave empty',
    },
    copyResponsibles: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Copy responsibles',
    },
    addResponsibles: {
      type: ContactID.NonNull.List,
      description: 'Add specified users to task responsible list',
    },
    removeResponsibles: {
      type: ContactID.NonNull.List,
      description: 'Remove specified users from task responsible list',
    },
    copyCustomFields: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Copy custom fields',
    },
    copyCustomStatuses: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Copy custom statuses or set according to workflow otherwise',
    },
    copyStatuses: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Copy task statuses or set to Active otherwise',
    },
    copyParents: {
      type: 'Boolean!',
      defaultValue: false,
      description: 'Preserve parent folders',
    },
    rescheduleDate: {
      type: DateYMD,
      description:
        "Date to use in task rescheduling. Note that only active tasks can be rescheduled. To activate and reschedule all tasks, use 'rescheduleDate' in combination with copyStatuses = false. Format: yyyy-MM-dd",
    },
    rescheduleMode: {
      type: `
        enum FolderCopyResheduleMod {
          """Tasks in scope are rescheduled starting from reschedule date"""
          Start
          
          """Tasks in scope are rescheduled ending with reschedule date"""
          End
        }
      `,
      defaultValue: 'Start',
      description:
        'Mode to be used for rescheduling (based on first or last date), has effect only if reschedule date is specified.',
    },
    entryLimit: {
      type: 'Int',
      defaultValue: 250,
      description:
        'Limit maximum allowed number for tasks/folders in tree for copy, operation will fail if limit is exceeded, should be 1..250',
    },
  },
});

import { FieldConfig } from 'app/schema/definitions';
import { AuditLogTC } from '../entities/AuditLogTC';
import { AuditLogOperationEnum } from '../types/Enums';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { auditLogFindMany, FindManyOpts } from 'app/vendor/auditLog/auditLogFindMany';

export default {
  type: AuditLogTC.List,
  description:
    'Get Audit Log Reports, that contains audit trail for actions in the account. Available to Enterprise admins with "Create user activity reports" right.',
  args: {
    pageSize: {
      type: 'Int',
      description: 'Page size',
    },
    nextPageToken: {
      type: 'String',
      description: 'Next page token, overrides any other parameters in request',
    },
    filter: AuditLogTC.schemaComposer.createInputTC({
      name: 'AuditLogFilter',
      fields: {
        eventDate: DateTimeRangeInput,
        operations: AuditLogOperationEnum,
      },
    }),
  },
  resolve: (_, args, context) => {
    return auditLogFindMany(args, context);
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.pageSize || 100),
  },
} as FieldConfig<FindManyOpts>;

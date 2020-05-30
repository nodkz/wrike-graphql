import { AuditLogID, ContactID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { AuditLogOperationEnum, AuditLogObjectTypeEnum } from '../types/Enums';

export const AuditLogTC = schemaComposer.createObjectTC({
  name: 'AuditLog',
  fields: {
    id: AuditLogID.NonNull,
    operation: {
      type: AuditLogOperationEnum.NonNull,
      description: 'Operation',
    },
    userId: {
      type: ContactID.NonNull,
      description: 'Operational user ID',
    },
    userEmail: {
      type: 'String',
      description: 'Operational user e-mail',
    },
    eventDate: {
      type: 'Date',
      description: 'Date and time when operation was performed',
    },
    ipAddress: {
      type: 'String',
      description: 'IP address from which an operation was performed',
    },
    objectType: {
      type: AuditLogObjectTypeEnum,
      description: 'Result',
    },
    objectName: {
      type: 'String',
      description: 'Object name',
    },
    objectId: {
      type: 'String',
      description: 'Object ID',
    },
    details: {
      type: 'JSON',
      description: 'Operation details',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  AuditLogTC.addFields({});
}

import { schemaComposer } from 'graphql-compose';

export const TaskImportanceEnum = schemaComposer.createEnumTC(`
  enum TaskImportanceEnum {
    High
    Normal
    Low
  }
`);

export const TaskStatusEnum = schemaComposer.createEnumTC(`
  enum TaskStatusEnum {
    Active
    Completed
    Deferred
    Cancelled
  }
`);

export const TaskDatesTypeEnum = schemaComposer.createEnumTC(`
  enum TaskDatesTypeEnum {
    Backlog
    Milestone
    Planned
  }
`);

export const UserTypeEnum = schemaComposer.createEnumTC(`
  enum UserTypeEnum {
    Person
    Group
  }
`);

export const UserRoleEnum = schemaComposer.createEnumTC(`
  enum UserRoleEnum {
    User
    Collaborator
  }
`);

export const InvitationStatusEnum = schemaComposer.createEnumTC(`
  enum InvitationStatusEnum {
    Pending
    Accepted
    Declined
    Cancelled
  }
`);

export const FirstDayOfWeekEnum = schemaComposer.createEnumTC(`
  enum FirstDayOfWeekEnum {
    Sat
    Sun
    Mon
  }
`);

export const WeekDayEnum = schemaComposer.createEnumTC(`
  enum WeekDayEnum {
    Sun
    Mon
    Tue
    Wed
    Thu
    Fri
    Sat
  }
`);

export const SubscriptionTypeEnum = schemaComposer.createEnumTC(`
  enum SubscriptionTypeEnum {
    Free
    Premium
    Business
    CreativeBusiness
    Enterprise
    CreativeEnterprise
  }
`);

export const CustomFieldTypeEnum = schemaComposer.createEnumTC(`
  enum CustomFieldTypeEnum {
    """String field, Comparable field"""
    Text
    """String field, Comparable field"""
    DropDown
    """Comparable field"""
    Numeric
    """Comparable field"""
    Currency
    """Comparable field"""
    Percentage
    """Comparable field"""
    Date
    """Comparable field"""
    Duration	
    """Boolean field"""
    Checkbox
    """Collection field"""
    Contacts
    """Collection field"""
    Multiple
  }
`);

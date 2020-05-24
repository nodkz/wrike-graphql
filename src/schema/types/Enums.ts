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

export const ColorEnum = schemaComposer.createEnumTC(`
  enum ColorEnum {
    None
    Person
    Purple1
    Purple2
    Purple3
    Purple4
    Indigo1
    Indigo2
    Indigo3
    Indigo4
    DarkBlue1
    DarkBlue2
    DarkBlue3
    DarkBlue4
    Blue1
    Blue2
    Blue3
    Blue4
    Turquoise1
    Turquoise2
    Turquoise3
    Turquoise4
    DarkCyan1
    DarkCyan2
    DarkCyan3
    DarkCyan4
    Green1
    Green2
    Green3
    Green4
    YellowGreen1
    YellowGreen2
    YellowGreen3
    YellowGreen4
    Yellow1
    Yellow2
    Yellow3
    Yellow4
    Orange1
    Orange2
    Orange3
    Orange4
    Red1
    Red2
    Red3
    Red4
    Pink1
    Pink2
    Pink3
    Pink4
    Gray1
    Gray2
    Gray3
  }
`);

export const TreeScopeEnum = schemaComposer.createEnumTC(`
  enum TreeScopeEnum {
    """Virtual root folder of account"""
    WsRoot
    """Virtual Recycle Bin folder of account"""
    RbRoot
    """Folder in account"""
    WsFolder
    """Folder is in Recycle Bin (deleted folder)"""
    RbFolder
    """Task in account"""
    WsTask
    """Task is in Recycle Bin (deleted task)"""
    RbTask
  }
`);

export const ProjectStatusEnum = schemaComposer.createEnumTC(`
  enum ProjectStatusEnum {
    Green
    Yellow
    Red
    Completed
    OnHold
    Cancelled
    Custom
  }
`);

export const ProjectContractTypeEnum = schemaComposer.createEnumTC(`
  """Project Contract Type (Wrike Resource only)"""
  enum ProjectContractTypeEnum {
    Billable
    NonBillable
  }
`);

export const BillingTypeEnum = schemaComposer.createEnumTC(`
  """Timelog billing type (Wrike Resource only)"""
  enum BillingTypeEnum {
    Billable
    NonBillable
  }
`);

export const CustomFieldComparatorEnum = schemaComposer.createEnumTC(`
  enum CustomFieldComparatorEnum {
    """For all field types"""
    EqualTo
    """For all field types"""
    IsEmpty
    """For all field types"""
    IsNotEmpty
    """For comparable field types"""
    LessThan
    """For comparable field types"""
    LessOrEqualTo
    """For comparable field types"""
    GreaterThan
    """For comparable field types"""
    GreaterOrEqualTo
    """For comparable field types"""
    InRange
    """For comparable field types"""
    NotInRange
    """For string field types"""
    Contains
    """For string field types"""
    StartsWith
    """For string field types"""
    EndsWith
    """For collection field types"""
    ContainsAll
    """For collection field types"""
    ContainsAny
  }
`);

export const SpaceAccessTypeEnum = schemaComposer.createEnumTC(`
  enum SpaceAccessTypeEnum { 
    Personal
    Private
    Public
  }
`);

export const StatusColorEnum = schemaComposer.createEnumTC(`
  enum StatusColorEnum { 
    Brown
    Red
    Purple
    Indigo
    DarkBlue
    Blue
    Turquoise
    DarkCyan
    Green
    YellowGreen
    Yellow
    Orange
    Gray
  }
`);

export const CustomFieldInheritanceEnum = schemaComposer.createEnumTC(`
  enum CustomFieldInheritanceEnum { 
    All
    Folders
    Projects
  }
`);

export const CurrencyEnum = schemaComposer.createEnumTC(`
  enum CurrencyEnum { 
    USD
    EUR
    GBP
    RUB
    BRL
    AED
    ARS
    BYR
    CAD
    CLP
    COP
    CZK
    DKK
    HKD
    HUF
    INR
    IDR
    ILS
    JPY
    KRW
    MYR
    MXN
    NZD
    NOK
    PEN
    PHP
    PLN
    QAR
    RON
    SAR
    SGD
    ZAR
    SEK
    CHF
    TWD
    THB
    TRY
    UAH
    VND
    CNY
    AUD
    AMD
    BWP
  }
`);

export const CustomFieldAggregationEnum = schemaComposer.createEnumTC(`
  enum CustomFieldAggregationEnum { 
    None
    Sum
    Average
  }
`);

export const AsyncJobStatusEnum = schemaComposer.createEnumTC(`
  enum AsyncJobStatusEnum { 
    InQueue
    InProgress
    Completed
    Failed
  }
`);

export const AsyncJobTypeEnum = schemaComposer.createEnumTC(`
  enum AsyncJobTypeEnum { 
    CopyFolder
  }
`);

export const DependencyRelationEnum = schemaComposer.createEnumTC(`
  enum DependencyRelationEnum { 
    StartToStart
    StartToFinish
    FinishToStart
    FinishToFinish
  }
`);

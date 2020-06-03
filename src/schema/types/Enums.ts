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

export const AttachmentTypeEnum = schemaComposer.createEnumTC(`
  enum AttachmentTypeEnum { 
    """Attachment file content stored in Wrike. When deleted, actual file is removed"""
    Wrike
    
    """Google attachment. Attachment can be accessed only via URL, downloads are not supported by Wrike.When deleted, only stored link is removed"""
    Google
    
    """DropBox attachment. When deleted, only stored link is removed"""
    DropBox
    
    """Box attachment. Attachment can be accessed only via URL, downloads are not supported by Wrike.When deleted, only stored link is removed"""
    Box
    
    """OneDrive attachment. When deleted, only stored link is removed"""
    OneDrive
    
    """External attachment"""
    External
    
    """Attachment from an external DAM system"""
    DAM
  }
`);

export const DataExportStatusEnum = schemaComposer.createEnumTC(`
  enum DataExportStatusEnum  { 
    Scheduled
    InProgress
    Completed
    Cancelled
    Failed
  }
`);

export const AuditLogOperationEnum = schemaComposer.createEnumTC(
  `enum AuditLogOperationEnum { 
    UserLoggedIn, UserFailLogin, UserLogout, AdminLoggedInAsUser, UserRoleChanged, UserAdminPermissionsChanged, UserGrantAdmin, UserRevokeAdmin, UserDeactivated, UserActivated, UsersAndGroupsExported, InvitationSend, InvitationAccepted, AttachUploaded, AttachDeleted, GroupCreated, GroupMemberAdded, GroupMemberRemoved, GroupRenamed, GroupDeleted, GroupParentAdded, GroupParentRemoved, TaskParentAdded, TaskParentRemoved, TaskShared, TaskUnshared, TaskAssigned, TaskUnassigned, TaskDeleted, TaskErased, TaskCommentChanged, TaskCommentDeleted, RecycleBinErased, TaskStatusChanged, TaskDuplication, UserDeleted, UserRestored, ApproverAdded, ApproverRemoved, ApprovalDescriptionChanged, ApprovalDueDateChanged, ApprovalCreated, ApprovalFinished, ApprovalCanceled, ApprovalDecisionMade, CustomFieldCreated, CustomFieldModified, CustomFieldRemoved, CustomFieldRestored, CustomFieldAddedToFolder, CustomFieldRemovedFromFolder, SecondFactorEnabled, SecondFactorDisabled, SecondFactorUsageReportCreated, AuditReportCreated, AccountBackupCreated, AccountModified, AccountDeleted, Oauth2AccessGranted, Oauth2AccessRevoked, FeedCreated, ExcelExportCreated, AccessAuditReportCsvExport, UserProfileUpdated, PasswordChanged, PasswordPolicyModified, ApprovedIpRangesOrSubnetsChanged, InvitationPolicyChanged, RequestFormCreated, RequestFormModified, RequestFormDeleted, AccessRoleCreated, AccessRoleModified, AccessRoleDeleted, WorkflowCreated, WorkflowDeleted, WorkflowModified, CalendarExternalLinksDeactivated, CalendarExternalLinksActivated, CalendarExternalLinkCreated, CalendarExternalLinkDeleted, GuestReviewerInvited, GuestReviewerChanged, GuestReviewerRevoked, GuestReviewAccepted, GuestReviewRejected, GuestReviewAccountSettingsChanged, GanttSnapshotCreated, GanttSnapshotDeleted, UserTaskGroupRolesChanged, AccountDataExportRequested, AccountDataExportGenerated, SamlSSOEnabled, SamlSSODisabled, SamlSSOSettingsChanged, SamlSSOMetadataChanged, SamlClearPasswordForSamlUsers, AccessCodeGenerated, AccessCodeAccepted, AccessCodeDeclined, ApprovedDomainsChanged, SpaceCreated, SpaceDeleted, SpaceArchivedUnarchived, UserJoinedSpace, UserLeftSpace
  }`.replace(/,/gi, '')
);

export const AuditLogObjectTypeEnum = schemaComposer.createEnumTC(
  `enum AuditLogObjectTypeEnum { 
    User, Account, Task, Folder, Project, Comment, Attachment, Invitation, Group, CustomField, Oauth2Client, RequestForm, Workflow, CalendarExternalLink, WorkspaceSnapshot, DataExport, AccessRole, Space
  }`.replace(/,/gi, '')
);

export const ApprovalFinalStatusEnum = schemaComposer.createEnumTC(`
  enum ApprovalFinalStatusEnum {
    Pending
    Approved
    Rejected
    Cancelled
    Draft
  }
`);

export const ApprovalDecisionStatusEnum = schemaComposer.createEnumTC(`
  enum ApprovalDecisionStatusEnum  { 
    Pending
    Approved
    Rejected
  }
`);

export const ApprovalTypeEnum = schemaComposer.createEnumTC(`
  enum ApprovalTypeEnum {
    Regular
    FilesOnly
  }
`);

export const WorkScheduleTypeEnum = schemaComposer.createEnumTC(`
  enum WorkScheduleTypeEnum {
    """Default schedule is created along with account and used for all users not explicitly assigned to custom schedule"""
    Default
    
    """Custom schedule is used when some account users have schedules which is different to default"""
    Custom
  }
`);

export const WorkScheduleExclusionEnum = schemaComposer.createEnumTC(`
  enum WorkScheduleExclusionEnum {
    """Additional working days, i.e. during weekends"""
    AdditionalWorkDays

    """Non-working days because of public holidays"""
    PublicHolidays
    
    """Non-working days because of some company or private event"""
    OtherEvent
  }
`);

export const UserScheduleExclusionEnum = schemaComposer.createEnumTC(`
  enum UserScheduleExclusionEnum {
    """Additional working days"""
    Overtime

    """Paid vacations"""
    VacationPTO

    """Other non-working days"""
    OtherNonWorking
  }
`);

export const TaskFindManySortEnum = schemaComposer.createEnumTC({
  name: 'TaskFindManySortEnum',
  values: {
    CREATED_DATE_ASC: {
      value: { sortField: 'CreatedDate', sortOrder: 'Asc' },
      description: 'Sort by created date',
    },
    CREATED_DATE_DESC: {
      value: { sortField: 'CreatedDate', sortOrder: 'Desc' },
      description: 'Sort by created date',
    },
    UPDATED_DATE_ASC: {
      value: { sortField: 'UpdatedDate', sortOrder: 'Asc' },
      description: 'Sort by updated date',
    },
    UPDATED_DATE_DESC: {
      value: { sortField: 'UpdatedDate', sortOrder: 'Desc' },
      description: 'Sort by updated date',
    },
    COMPLETED_DATE_ASC: {
      value: { sortField: 'CompletedDate', sortOrder: 'Asc' },
      description: 'Sort by completed date',
    },
    COMPLETED_DATE_DESC: {
      value: { sortField: 'CompletedDate', sortOrder: 'Desc' },
      description: 'Sort by completed date',
    },
    DUE_DATE_ASC: {
      value: { sortField: 'DueDate', sortOrder: 'Asc' },
      description: 'Sort by due date',
    },
    DUE_DATE_DESC: {
      value: { sortField: 'DueDate', sortOrder: 'Desc' },
      description: 'Sort by due date',
    },
    STATUS_ASC: {
      value: { sortField: 'Status', sortOrder: 'Asc' },
      description: 'Sort by status ASC',
    },
    STATUS_DESC: {
      value: { sortField: 'Status', sortOrder: 'Desc' },
      description: 'Sort by status',
    },
    IMPORTANCE_ASC: {
      value: { sortField: 'Importance', sortOrder: 'Asc' },
      description: 'Sort by importance',
    },
    IMPORTANCE_DESC: {
      value: { sortField: 'Importance', sortOrder: 'Desc' },
      description: 'Sort by importance',
    },
    TITLE_ASC: {
      value: { sortField: 'Title', sortOrder: 'Asc' },
      description: 'Lexicographic sorting by title',
    },
    TITLE_DESC: {
      value: { sortField: 'Title', sortOrder: 'Desc' },
      description: 'Lexicographic sorting by title',
    },
    LAST_ACCESS_DATE_ASC: {
      value: { sortField: 'LastAccessDate', sortOrder: 'Asc' },
      description: 'Sort by last access date',
    },
    LAST_ACCESS_DATE_DESC: {
      value: { sortField: 'LastAccessDate', sortOrder: 'Desc' },
      description: 'Sort by last access date',
    },
  },
});

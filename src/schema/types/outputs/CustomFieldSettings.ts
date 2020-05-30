import { schemaComposer } from 'graphql-compose';
import { CustomFieldInheritanceEnum, CurrencyEnum, CustomFieldAggregationEnum } from '../Enums';
import { ContactID } from '../Scalars';
import { getRelationContactIds } from 'app/schema/resolvers/contact';

export const CustomFieldSettings = schemaComposer.createObjectTC({
  name: 'CustomFieldSettings',
  fields: {
    inheritanceType: {
      type: CustomFieldInheritanceEnum,
      description: 'Inheritance type.',
    },
    decimalPlaces: {
      type: 'Int',
      description: 'Decimal places (only for Numeric, Percentage and Currency types).',
    },
    useThousandsSeparator: {
      type: 'Boolean',
      description: 'Use thousands separator (only for Numeric type).',
    },
    currency: {
      type: CurrencyEnum,
      description: 'Currency (only for Currency type)',
    },
    aggregation: {
      type: CustomFieldAggregationEnum,
      description:
        'Aggregation type (only for Text, Numeric, Percentage, Currency, Duration, MultipleSelect and DropDown types)',
    },
    values: {
      type: '[String!]',
      description: 'Dropdown values (only for DropDown and MultipleSelect type)',
    },
    allowOtherValues: {
      type: 'Boolean',
      description: 'Allow users to input other values (only for DropDown type).',
    },
    contacts: {
      type: ContactID.NonNull.List,
      description: 'Allowed users or invitations (only for Users type)',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  CustomFieldSettings.addFields({
    contacts: getRelationContactIds('contacts'),
  });
}

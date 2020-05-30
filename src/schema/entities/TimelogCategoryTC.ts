import { TimelogCategoryID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';

export const TimelogCategoryTC = schemaComposer.createObjectTC({
  name: 'TimelogCategory',
  fields: {
    id: TimelogCategoryID.NonNull,
    name: {
      type: 'String!',
      description: 'Name of the timelog record',
    },
    order: {
      type: 'Int!',
      description: 'Order number of the timelog category in category list',
    },
    hidden: {
      type: 'Boolean!',
      description: 'Timelog category is hidden',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  TimelogCategoryTC.addFields({});
}

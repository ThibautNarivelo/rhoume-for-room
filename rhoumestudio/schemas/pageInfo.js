export default {
    name: 'pageInfo',
    title: 'Page Info',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Just click to Generate Button 👁',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },

          {
            name: 'beforeCareTitle',
            title: 'Before Care Title',
            type: 'string',
          },

          {
            name: 'beforeCareBody',
            title: 'Before Care Body',
            type: 'blockContent',
          },

          {
            name: 'afterCareTitle',
            title: 'After Care Title',
            type: 'string',
          },

          {
            name: 'afterCareBody',
            title: 'After Care Body',
            type: 'blockContent',
          },

          {
            name: 'bookingsTitle',
            title: 'Bookings Title',
            type: 'string',
          },

          {
            name: 'bookingsBody',
            title: 'Bookings Body',
            type: 'blockContent',
          },

          {
            name: 'appointmentsTitle',
            title: 'Appointments Title',
            type: 'string',
          },

          {
            name: 'appointmentsBody',
            title: 'Appointments Body',
            type: 'blockContent',
          },
    ],
    orderings: [
      {
        title: 'ID for Order',
        name: 'orderIdAsc',
        by: [
          {field: 'orderId', direction: 'asc'}
        ]
      },
    ],
}
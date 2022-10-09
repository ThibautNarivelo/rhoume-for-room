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
            name: 'text',
            title: 'Text',
            description: 'Text',
            type: 'text',
          },
    ]
}
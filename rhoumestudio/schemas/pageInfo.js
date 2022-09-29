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
            name: 'body',
            title: 'Text',
            description: 'Text',
            type: 'blockContent',
          },
    ]
}
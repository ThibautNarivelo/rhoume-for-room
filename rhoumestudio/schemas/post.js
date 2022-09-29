export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Keep titles short! 😉',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Good quality please! 🤓',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Description of your tattoo 🐙',
      type: 'blockContent',
    },
  ],


}

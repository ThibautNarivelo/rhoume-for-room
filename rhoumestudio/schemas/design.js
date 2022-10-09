export default {
    name: 'design',
    title: 'Design',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'Keep titles short! 😉',
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
        name: 'image',
        title: 'Design Image',
        type: 'image',
        description: 'Good quality please! 🤓',
      },

    ],
  
  
  }
  
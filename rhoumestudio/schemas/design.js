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
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'Good quality please! 🤓',
        options: {
          hotspot: true,
        },
      },


    ],
  
  
  }
  
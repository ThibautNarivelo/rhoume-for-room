import { MdEast } from "react-icons/md";

export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: MdEast,
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
        name: 'rhoumeTitle',
        title: 'Rhoume Title',
        type: 'image',
      },

      {
        name: 'forroomTitle',
        title: 'For_Room Image',
        type: 'image',
      },
  
      {
        name: 'rhoumeDesign',
        title: 'Rhoume Design',
        type: 'image',
      },
      
      {
        name: 'contentButton',
        title: 'Content button',
        type: 'string',
      },

   
    ],
  
  
  }
  
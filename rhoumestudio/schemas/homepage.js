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
        name: 'rhoumeMainDesign',
        title: 'Rhoume Main Design',
        type: 'image',
      },

      {
        name: 'rhoumeAboutDesign',
        title: 'Rhoume About Design',
        type: 'image',
      },

      {
        name: 'rhoumePhotosDesign',
        title: 'Rhoume Photos Design',
        type: 'image',
      },

      {
        name: 'rhoumeContactDesign',
        title: 'Rhoume Contact Design',
        type: 'image',
      },

      {
        name: 'rhoumeFaqDesign',
        title: 'Rhoume FAQ Design',
        type: 'image',
      },
      {
        name: 'rhoumeIGDesign',
        title: 'Rhoume IG Design',
        type: 'image',
      },
      
      {
        name: 'contentButton',
        title: 'Content button',
        type: 'string',
      },

   
    ],
  
  
  }
  
import { MdPhotoLibrary } from "react-icons/md";

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdPhotoLibrary,
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
      title: 'Image',
      type: 'image',
      description: 'Good quality please! 🤓',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date of the tattoo',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Description of your tattoo 🐙',
      type: 'text',
    },
  ],


}

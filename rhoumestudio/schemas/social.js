import { MdAccountCircle } from "react-icons/md";

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: MdAccountCircle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      description: '🤙🏽 Platform for Social Media',
      title: 'URL',
      type: 'url',
    },
  ],
}

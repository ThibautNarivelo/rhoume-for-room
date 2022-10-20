import { MdOutlineArticle } from "react-icons/md";

export default {
    name: 'aboutInfo',
    title: 'About Info',
    type: 'document',
    icon: MdOutlineArticle,
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
            name: 'definition',
            title: 'Definition',
            type: 'blockContent',
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
          },
    ],
}
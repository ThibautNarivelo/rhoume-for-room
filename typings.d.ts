// This is all I want to export from Sanity using Groq.
import type { PortableTextBlock } from '@portabletext/types'
interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Design extends SanityBody {
    _type: "design";
    title: string;
    slug: {
        _type: string;
        current: string;
    };
rhoumeTitle: Image;
forroomTitle: Image;
rhoumeMainDesign: Image;
rhoumeAboutDesign: Image;
rhoumePhotosDesign: Image;
rhoumeContactDesign: Image;
rhoumeFaqDesign: Image;
rhoumeIGDesign: Image;
imageSEO: Image;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    slug: {
        _type: string;
        current: string;
    };
    title: string;
    body:[PortableTextBlock];
    beforeCareTitle:string;
    beforeCareBody:[PortableTextBlock];
    afterCareTitle:string;
    afterCareBody:[PortableTextBlock];
    bookingsTitle:string;
    bookingsBody:[PortableTextBlock];
    appointmentsTitle:string;
    appointmentsBody:[PortableTextBlock];

}
export interface AboutInfo extends SanityBody {
    _type: "aboutInfo";
    slug: {
        _type: string;
        current: string;
    };
    rhoumeLocation: string;
    rhoumeEmail: string;
    title: string;
    definition:[PortableTextBlock];
    bio:[PortableTextBlock];
    contactMeTitle: string;
    copyrightsInfo:[PortableTextBlock];
}

export interface Post extends SanityBody {
    _type: "post";
    title: string;
    image: image;
    slug: {
        _type: string;
        current: string;
    }; 
}


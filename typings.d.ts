// This is all I want to export from Sanity using Groq.
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
    image: Image;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    slug: {
        _type: string;
        current: string;
    };
    text: string;
    title: string;
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
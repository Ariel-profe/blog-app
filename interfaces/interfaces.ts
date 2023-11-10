
export interface INavLink {
    id: number;
    name: string;
    href: string;
};

export interface ICategory {
    id: string;
    title: string;
    img?: string;
    slug: string;
    posts: IPost[];
};

export interface PopularPost {
    id: string;
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
};

export interface IUser {
    _id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string;
};

export interface IPost {
    id: string;
    category: string;
    catSlug: string;
    slug: string;
    title: string;
    description: string;
    date: string;
    img: string;
    views: number
    user: IUser
    userEmail: string;
    comments: string[];
    createdAt: string;
};

export interface IComment {
    id: string;
    description: string;
    userEmail: string;
    user: IUser;
    postSlug: string;
    post: IPost;
    createdAt: string;
}
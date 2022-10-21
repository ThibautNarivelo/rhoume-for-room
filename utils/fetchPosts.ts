import { Post } from "../typings";

export const fetchPosts = async() => {
    const res = await fetch(`http://localhost:3000/api/getPosts`);

    const data = await res.json()
    const posts: Post[] = data.posts;

    
    return posts;   
}
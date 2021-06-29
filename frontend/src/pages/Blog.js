import { useState, useEffect } from "react";

import BlogPost from "../components/BlogPost"

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const getBlogPosts = async () => {
            const blogPostsFromServer = await fetchBlogPosts()
            setBlogPosts(blogPostsFromServer)
        }
        getBlogPosts()
    }, [])

    const fetchBlogPosts = async () => {
        const res = await fetch("http://localhost:8088/blog")
        const data = await res.json();
        return data
    }

    return (
        <div className="cardContainer">
            <h1>Blog</h1>
            <div>
                {blogPosts.map((post) => (
                    <BlogPost 
                        key={post.id}
                        title={post.title}
                        msg={post.msg}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog
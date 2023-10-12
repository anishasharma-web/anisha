 import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/BlogService";
import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";


const BlogList = () => {

    const [allBlogList, setAllBlogList] = useState([]);
    
    useEffect(() => {
        getAllBlogs()
            .then((resp) => {
                console.log(resp.data);
                setAllBlogList(resp.data); // use response with 'data' 
            })
            .catch((err) => {
                // write proper code 
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h1>Blog List</h1>
            {
                allBlogList.map((blog, k) => {
                    return <p obj={blog} key={k}> <Link to={`/BlogDetails/${blog.id}`}>{blog.title} <br /></Link></p>
                    // return <p obj={blog} key={k}> <Link to="BlogDetails">{blog.title} <br /></Link></p>
                })
            }
        </div>
    );
};

export default BlogList; 
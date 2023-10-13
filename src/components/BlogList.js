 import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/BlogService";
import { Link } from "react-router-dom";
import '../styles/BlogList.css'
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
            <div className="list">
            {
                allBlogList.map((blog, k) => {
                    return <p obj={blog} key={k}> <Link to={`/BlogDetails/${blog.id}`} className="blog-list">{blog.title} <br /></Link></p>
                    // return <p obj={blog} key={k}> <Link to="BlogDetails">{blog.title} <br /></Link></p>
                })
            }
            </div>
           
        </div>
    );
};

export default BlogList; 
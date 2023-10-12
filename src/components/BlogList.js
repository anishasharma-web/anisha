 import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/UserService";


const BlogList = () => {

    // return (
    //     <div>
    //         <h1>BlogList component...</h1>
    //     </div>
    // );

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
                    return <p obj={blog} key={k}> {blog.title} <br /></p>
                })
            }
        </div>
    );
};

export default BlogList; 
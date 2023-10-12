
import { useState , useEffect} from "react";
import { useParams } from "react-router";
// import { Routes, Route, useParams } from 'react-router-dom';


const Comments = () => {

    const blogParam = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)
        fetch(`https://jsonplaceholder.typicode.com/comments/${blogParam.id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
           <h1>Blog Details</h1>
           <p>{blog.title}</p>
           <p>{blog.body}</p>
        </div>
    );

};

export default BlogDetails;
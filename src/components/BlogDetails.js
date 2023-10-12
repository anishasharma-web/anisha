import { useState , useEffect} from "react";
import { useParams } from "react-router";
// import { Routes, Route, useParams } from 'react-router-dom';


const BlogDetails = () => {

    const blogParam = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)
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


// const BlogDetails = () => {
//     const { id } = useParams();
//     const [blog, setBlog] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setBlog(data);
//                 setIsLoading(false); // Data has been loaded
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setIsLoading(false); // Error occurred, set isLoading to false
//             });
//     }, [id]);

//     return (
//         <div>
//             <h1>Blog Details</h1>
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <>
//                     <p>{blog.title}</p>
//                     <p>{blog.body}</p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default BlogDetails;








// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//     const { id } = useParams(); // Correctly destructure the id parameter
//     const [blog, setBlog] = useState({}); // Use an object to store the blog data

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setBlog(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, [id]); // Include id as a dependency to re-fetch data when it changes

//     return (
//         <div>
//             <h1>Blog Details</h1>
//             <p>{blog.title}</p>
//             <p>{blog.body}</p>
//         </div>
//     );
// };

// export default BlogDetails;



// const BlogDetails = () => {

//     // let blogId = new URLSearchParams(window.location.search).get('blog-id');
//     // const url = `https://jsonplaceholder.typicode.com/posts/${blogId}`;
//     const [blogDetails, setBlogDetails] = useState([]);
//     fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)

//     return (
//         <div>
//             <h1>BlogDetails component...</h1>
//         </div>
//     );


 // return (
    //     <div>
    //         <h1>BlogDetails component...</h1>
    //     </div>
    // );
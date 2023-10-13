import { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../styles/BlogDetails.css';

const BlogDetails = () => {
    const blogParam = useParams();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [writerDetails, setWriterDetails] = useState({}); // State to store writer details

    useEffect(() => {
        // Fetch blog details
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data);
            })
            .catch((error) => {
                console.error("Error fetching blog data:", error);
            });

        // Fetch comments
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blogParam.id}`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
            })
            .catch((error) => {
                console.error("Error fetching comments:", error);
            });

        // Fetch writer details
        fetch(`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
            .then((response) => response.json())
            .then((data) => {
                setWriterDetails(data);
            })
            .catch((error) => {
                console.error("Error fetching writer details:", error);
            });
    }, [blogParam.id, blog.userId]);

    return (
        <div className="blog-details">
            <h1>Blog Details</h1>
            <p><b>Posted By: </b>{writerDetails.name}</p>
            <p><b>Email: </b>{writerDetails.email}</p>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
            <h4>Comments:</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p><b>Name:</b> {comment.name}</p>
                        {/* <p>Email: {comment.email}</p> */}
                        <p><b>Comment:</b> {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogDetails;




// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import '../styles/BlogDetails.css';

// const BlogDetails = () => {
//     const blogParam = useParams();
//     const [blog, setBlog] = useState({});
//     const [comments, setComments] = useState([]); 

//     useEffect(() => {
//         // Fetch blog details
//         fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setBlog(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching blog data:", error);
//             });

//         // Fetch comments
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blogParam.id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setComments(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching comments:", error);
//             });
//     }, [blogParam.id]); 

//     return (
//         <div className="blog-details">
//             <h1>Blog Details</h1>
//             <p>Posted By: {blog.userId}</p>
//             <p>Email: {blog.email}</p> 
//             <p>{blog.title}</p>
//             <p>{blog.body}</p>
//             <h4>Comments:</h4>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>
//                         <p>Name: {comment.name}</p>
//                         {/* <p>Email: {comment.email}</p> */}
//                         <p>Comment: {comment.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BlogDetails;


// import { useState , useEffect} from "react";
// import { useParams } from "react-router";
// import '../styles/BlogDetails.css';



// const BlogDetails = () => {

//     const blogParam = useParams();
//     const [blog, setBlog] = useState([]);
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setBlog(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     return (
//         <div className="blog-details">
//            <h1>Blog Details</h1>
//            <p>Posted By: {}</p>
//            <p>Email:{}</p>
//            <p>{blog.title}</p>
//            <p>{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}</p>
//            <h4>Comments:</h4>
//            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         </div>
//     );

// };

// export default BlogDetails;


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
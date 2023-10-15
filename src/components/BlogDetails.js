import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../styles/BlogDetails.css';

const BlogDetails = () => {
    const blogParam = useParams();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [writerDetails, setWriterDetails] = useState({});
    const [newComment, setNewComment] = useState(''); // State to store the new comment

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        // Create a new comment object
        const commentData = {
            postId: blog.id,
            name: writerDetails.name, // Assuming you want to use the writer's name
            email: writerDetails.email, // Assuming you want to use the writer's email
            body: newComment,
        };

        // Send the new comment to the backend
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        })
        .then((response) => response.json())
        .then((data) => {
            // Update the comments with the new comment
            setComments([...comments, data]);
            setNewComment(''); // Clear the input field
        })
        .catch((error) => {
            console.error("Error posting a new comment:", error);
        });
    };

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
            <a href={`mailto:${writerDetails.email}`} className="email-link"><b>Email: </b>{writerDetails.email}</a>
            <br /><br/>
            <section className="image-link"> 
            <img width="50%" src="https://picsum.photos/900/400" alt={blog.title} />
            <p className="blog-title">{blog.title}</p>
            </section>
            
           
            <p className="blog-body">{blog.body}{blog.body}{blog.body}{blog.body}{blog.body}</p>
            <h4>Comments:</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p><b>Name:</b> {comment.name}</p>
                        <p><b>Comment:</b> {comment.body}</p>
                    </li>
                ))}
            </ul>
            <div className="comment-form">
                <h4>Add a Comment:</h4>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={handleCommentChange}
                /><br />
                <button onClick={handleCommentSubmit}>Post Comment</button>
            </div>
        </div>
    );
};

export default BlogDetails;



// //before write comment functionality
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import '../styles/BlogDetails.css';

// const BlogDetails = () => {
    
//     const blogParam = useParams();
//     const [blog, setBlog] = useState({});
//     const [comments, setComments] = useState([]);
//     const [writerDetails, setWriterDetails] = useState({});

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

//         // Fetch writer details
//         fetch(`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setWriterDetails(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching writer details:", error);
//             });
//     }, [blogParam.id, blog.userId]);

//     return (
//         <div className="blog-details">
//             <h1>Blog Details</h1>
//             <p><b>Posted By: </b>{writerDetails.name}</p>
//             <a href={`mailto:${writerDetails.email}`} className="email-link"><b>Email: </b>{writerDetails.email}</a>
//             <p className="blog-title">{blog.title}</p>
//             <p className="blog-body">{blog.body}</p>
//             <h4>Comments:</h4>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>
//                         <p><b>Name:</b> {comment.name}</p>
//                         <p><b>Comment:</b> {comment.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BlogDetails;



// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import '../styles/BlogDetails.css';

// const BlogDetails = () => {
    
//     const blogParam = useParams();
//     const [blog, setBlog] = useState({});
//     const [comments, setComments] = useState([]);
//     const [writerDetails, setWriterDetails] = useState({}); // State to store writer details

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

//         // Fetch writer details
//         fetch(`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setWriterDetails(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching writer details:", error);
//             });
//     }, [blogParam.id, blog.userId]);

//     return (
//         <div className="blog-details">
//             <h1>Blog Details</h1>
//             <p><b>Posted By: </b>{writerDetails.name}</p>
//             <p><b>Email: </b>{writerDetails.email}</p>
//             <p>{blog.title}</p>
//             <p>{blog.body}</p>
//             <h4>Comments:</h4>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>
//                         <p><b>Name:</b> {comment.name}</p>
//                         {/* <p>Email: {comment.email}</p> */}
//                         <p><b>Comment:</b> {comment.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BlogDetails;





import React, { useState } from 'react';
import '../styles/NewBlog.css'; // Import your CSS file

const NewBlog = () => {
  const [blogData, setBlogData] = useState({ title: '', content: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the blog data to the backend (replace with your API endpoint)
    fetch('https://your-api-endpoint.com/create-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Blog submitted successfully.');
        } else {
          console.error('Failed to submit the blog.');
        }
      })
      .catch((error) => {
        console.error('Error submitting the blog:', error);
      });
  };

  return (
    <div className="new-blog-container">
      <h1 className="blog-title">Write a Blog</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="blog-form" >
          <label className="form-label">
            Title:
            <input type="text" name="title" value={blogData.title} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <br />
          <label className="form-label">
            Content:
            <textarea rows={5} cols={30} name="content" value={blogData.content} onChange={handleInputChange}
            className="form-textarea"/>
          </label>
          <br />
          <input type="submit" value="Submit" className="form-submit" />
        </form>
      </div>
    </div>
  );
};

export default NewBlog;



// import React, { useState } from 'react';
// import '../styles/NewBlog.css';

// const NewBlog = () => {
//   const [blogData, setBlogData] = useState({ title: '', content: '' });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setBlogData({ ...blogData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the blog data to the backend (replace with your API endpoint)
//     fetch('https://your-api-endpoint.com/create-blog', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(blogData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Blog successfully submitted
//           console.log('Blog submitted successfully.');
//           // Optionally, you can redirect the user to a success page or the list of blogs.
//         } else {
//           // Handle error if the blog submission fails
//           console.error('Failed to submit the blog.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error submitting the blog:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Write a blog</h1>
//       <div>
//         <form onSubmit={handleSubmit} method='post'>
//           <label>
//             Title:
//             <input type="text" name="title" value={blogData.title} onChange={handleInputChange}/>
//           </label>
//           <br />
//           <br />
//           <label>
//             Content:
//             <textarea rows={5} cols={30} name="content"  value={blogData.content} onChange={handleInputChange} />
//           </label>
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewBlog;




// const NewBlog = () => {
  
//     return (
//         <div>
//             <h1>Write a blog</h1>
//             <div>
//                 <form >
//                     <label ></label>
//                     <input type="text" name="title" /><br/><br/>
//                    <textarea rows={5} cols={30}/><br/>
//                     <input type="submit"  />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default NewBlog;
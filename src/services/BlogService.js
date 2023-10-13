import axios from "axios";

const userUrl = 'https://jsonplaceholder.typicode.com/posts';

const getAllBlogs = () => {
   console.log('getAllBlogs');
   return axios.get(userUrl);
};


export {getAllBlogs};
// const getBlogById = (blogId) => {
//        console.log(blogId);
//        return fetch(`${userUrl}/${blogId}`);
//     };

// export {getAllBlogs, getBlogById};
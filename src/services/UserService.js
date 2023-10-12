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

// import axios from "axios";

// const empUrl = 'https://jsonplaceholder.typicode.com/users';

// const getAllEmps = () => {
//    console.log('getAllEmps');
//    return axios.get(empUrl);
// };

// const getEmpById = async (eid) => {
//    console.log(eid);
//    const resp = await fetch(`${empUrl}/${eid}`);
//    if(resp.status != 200)
//    throw await resp.json();
//    else
//    return await resp.json();
// };
// // const getEmpById = (eid) => {
// //    console.log(eid);
// //    return fetch(`${empUrl}/${eid}`);
// // };

// export {getAllEmps, getEmpById};
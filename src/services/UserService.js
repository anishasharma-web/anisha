import axios from "axios";

const userUrl = 'https://jsonplaceholder.typicode.com/users';

const getAllBlogs = () => {
   console.log('getAllBlogs');
   return axios.get(userUrl);
};


const register = (appUser) => {
    console.log(appUser);
    return axios.post(userUrl, appUser);
};

const login = (appUser) => {
    console.log(appUser);
    return axios.get(`${userUrl}/?username=${appUser.username}`);
};

const updateUser = (appUser) => {
    console.log(appUser);
    return axios.put(userUrl, appUser);
};

const logout = () => {
    console.log('logout');
};

export {register, login, updateUser, logout };




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
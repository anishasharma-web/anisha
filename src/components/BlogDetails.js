const BlogDetails = () => {

  const [blog, setBlog] = useState(new Blog());
const [blogIdToSearch, setBlogIdToSearch] = useState({});
const [errMessage, setErrMessage] = useState('');

const handleGetBlogById = (evt) => {
    console.log(evt.target.value);
    setBlogIdToSearch(evt.target.value);
};

const submitGetBlogById = (evt) => {
    console.log(blogIdToSearch);
    getEmpById(blogIdToSearch)
        .then(resp => resp.json())
        .then((resp) => {
            console.log(resp);
            setEmp(resp); // directly use response 
            setBlogIdToSearch('');
        })
        .catch((err) => {
             console.log(err);
            setErrMessage(`Employee id: ${eidToSearch} not found!`);
            setEidToSearch('');
            setEmp(new Employee());
            
        });
    evt.preventDefault();
};
   
};

export default BlogDetails;


// const [emp, setEmp] = useState(new Employee());
// const [eidToSearch, setEidToSearch] = useState({});
// const [errMessage, setErrMessage] = useState('');

// const handleGetEmpById = (evt) => {
//     console.log(evt.target.value);
//     setEidToSearch(evt.target.value);
// };

// const submitGetEmpById = (evt) => {
//     console.log(eidToSearch);
//     getEmpById(eidToSearch)
//         .then(resp => resp.json())
//         .then((resp) => {
//             console.log(resp);
//             setEmp(resp); // directly use response 
//             setEidToSearch('');
//         })
//         .catch((err) => {
//              console.log(err);
//             setErrMessage(`Employee id: ${eidToSearch} not found!`);
//             setEidToSearch('');
//             setEmp(new Employee());
            
//         });
//     evt.preventDefault();
// };

// return (
//     <div>
//         <h1>Employee Component</h1>
//         <div>
//             <p>Find Employee by Id</p>
//             <form onSubmit={submitGetEmpById}>
//                 <input type="number" name="eidToSearch"
//                     value={eidToSearch} onChange={handleGetEmpById}
//                     placeholder="Employee id" required />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//         <div>
//             <p>Employee Data</p>
//             <p>{errMessage}</p>
//             <div>
//                 {emp.id &&
//                     <div>
//                         <p>Name: {emp.name}</p>
//                         <p>Username: {emp.username}</p>
//                         <div>
//                           <p>Address:</p>
//                             <p>Street: {emp.address.street}</p>
//                             <p>Suite: {emp.address.suite}</p>
//                             <p>City: {emp.address.city}</p>
//                             <p>Zipcode: {emp.address.zipcode}</p>
//                             <div>
//                                 <p>Location:</p>
//                                 <p>Lattitude: {emp.address.geo.lat}</p>
//                                 <p>Longitude: {emp.address.geo.lng}</p>
//                             </div>
//                         </div>
//                         <p>Email: {emp.phone}</p>
//                         <p>Website: {emp.website}</p>
//                         <div>
//                             <p>Company:</p>
//                             <p>Name: {emp.company.name}</p>
//                             <p>Catchphrase: {emp.company.catchPhrase}</p>
//                             <p>BS: {emp.company.bs}</p>
//                         </div>
//                     </div>
//                 }
//             </div>
//             <div>
//             </div>
//         </div>
//     </div>
// );

 // return (
    //     <div>
    //         <h1>BlogDetails component...</h1>
    //     </div>
    // );
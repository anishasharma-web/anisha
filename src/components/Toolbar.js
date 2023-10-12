import { Link } from "react-router-dom";

const Toolbar = () => {
  
    return (
        <div>
            <Link to="Home">Home</Link>
            <Link to="blog-list">All Blogs</Link>
            {/* <Link to="BlogDetails">Blog Details</Link> */}
            <Link to="login">Login</Link>
            <Link to="Register">Register</Link>
        </div>
    );
};

export default Toolbar;
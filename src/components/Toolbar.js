import { Link } from "react-router-dom";

const Toolbar = () => {
  
    return (
        <div>
            <Link to="Home">Home</Link>
            <Link to="BlogList">All Blogs</Link>
            <Link to="BlogDetails">Blog Details</Link>
            <Link to="Login">Login</Link>
            <Link to="Register">Register</Link>
        </div>
    );
};

export default Toolbar;
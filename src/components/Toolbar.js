import { Link } from "react-router-dom";
import '../styles/Toolbar.css'

const Toolbar = () => {
  
    return (
        <div class='toolbar'>
            <Link to="Home" class='link'>Home</Link>
            <Link to="blog-list" class='link'>All Blogs</Link>
            {/* <Link to="BlogDetails">Blog Details</Link> */}
            <Link to="login" class='right-link'>Login</Link>
            <Link to="logout" class='right-link'>Logout</Link>
            <Link to="profile" class='link'>Profile</Link>
            <Link to="Register" class='right-link'>Register</Link>
        </div>
    );
};

export default Toolbar;
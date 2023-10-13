import { useNavigate } from "react-router";

const Logout = () => {

    const navigate = useNavigate();

    const logoutFromHere = () => {
        localStorage.removeItem('currentUser');
        alert('You have successfully logged out. Redirecting you to home...');
        navigate('/home');
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={logoutFromHere} >Logout</button>
        </div>
    );
};

export default Logout;
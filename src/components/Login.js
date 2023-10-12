import { useState } from "react";
import { useNavigate } from "react-router";
// import AppUser from "../../models/AppUser";
import AppUser from "../models/AppUser";
import { login } from "../services/UserService";
// import { login } from "../../services/UserService";

const Login = () => {

    const [loginData, setLoginData] = useState(new AppUser());
    const [failedLogin, setFailedLogin] = useState('');
    const navigate = useNavigate();

    const handleLogin = (evt) => {
        console.log(evt.target);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const submitLogin = (evt) => {
        console.log(loginData);
        login(loginData)
            .then((resp) => {
                if (resp.data[0].username === loginData.username) {
                    localStorage.setItem('currentUser', JSON.stringify(resp.data[0]));
                    setLoginData('');
                    setFailedLogin('');
                    alert(`Hi ${JSON.parse(localStorage.getItem('currentUser')).username}! You've logged in successfully. Redirecting you to home...`);
                    navigate('/home');
                }
            })
            .catch((err) => {
                console.log(err);
                setLoginData({ username: '', password: '' });
                setFailedLogin('Invalid credentials!');
                localStorage.removeItem('currentUser');
            });
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={submitLogin}>
                    <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
                    <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
                    <input type="submit" name="login" value="Login" />
                </form>
            </div>
            <p>{failedLogin}</p>
        </div>
    );
};

export default Login;
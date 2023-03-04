import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

const Login = (props) => {

    const [apiData, setApiData] = useState({username:"", password:""});
    
    const savedata = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/bitcode/signin', apiData)
        .then(
            result => {
                console.log(result.data);
                localStorage.setItem("username", JSON.stringify(result.data));
            }
           
        )
        .catch(error => alert("Invalid credentials."));
    }

    const handleChange=(event)=>{
        const {name,value} =event.target
        setApiData({...apiData,[name]:value})

    }

    return (
        <>
            <div id="loginContainer">
                <form method="POST" onSubmit={savedata} class="login-form">
                    <div class="title">
                        <p>Login</p>
                    </div>
                    <div class="username">
                        <input type="text" name="username" id="username" onChange={handleChange} placeholder="Username" required />
                    </div>
                    <div class="pass">
                        <input type="password" name="password" id="pass" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <div class="remember-me">
                        <input type="checkbox" name="remember" id="checkbox" />
                        <label for="checkbox">Remember Me</label>
                    </div>
                    <div class="forgot-pass">
                        <Link to="/">Forgot Password?</Link>
                    </div>
                    <div class="login-button">
                        <input id="submit" type="submit" value="Login" />
                    </div>
                    <div class="signup-link">
                        <Link to="/signup">Signup for New Account Here</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;
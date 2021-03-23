//import useState Hook from React
import React, {useState} from 'react';

function Login() {

    //Declare state variables and set them to empty
    //setUsername and SetPassords helps us to update the state variables with the most recent values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    //A function to update the username
    function updateUsername(e) {
        setUsername (e.target.value)
    }

    //A function to update the password
    function updatePassword(e) {
        setPassword (e.target.value)
    }


    return(
    
    <div className="login-section-wrapper">
        <div className="login-wrapper">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" className="form-control" value={username} onChange={updateUsername} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" className="form-control" value={password} onChange={updatePassword} />
                </div>

                <button type="submit" className="btn btn-block login-btn">Login</button>

                <p className="forgot-password text-right"> Forgot <a href="#">password?</a></p>

            </form>

            <p class="login-wrapper-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        
        </div>
    </div>
    )
}

export default Login;
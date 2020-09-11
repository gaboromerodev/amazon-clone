import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault(); // this line prevent from refreshing the hole page
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
        //some fancy firebase login shitttttt......
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //it successfully create a new user with email and password
            // console.log(auth); check if is grabbing the user email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch( error => alert(error.message))

        // do some fancy firebase register shitttt....
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" alt="Amazon Logo"/>
            </Link>
        

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn}
                    className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to AMAZON FAKE CLON Conditions of Use & Sale.
                    Please see our Privacy Policy Notice, our Cookies Notice 
                    and our Interest Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your Fake Amazon Account</button>
            </div>
        </div>
    );
}

export default Login

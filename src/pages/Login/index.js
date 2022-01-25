import React from 'react';
import './styles.css'

const Login = () => {
    return (
   
            <form className='mx-auto border p-2 m-2' id='login-form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputUser1" className="form-label">User address</label>
                    <input type="text" className="form-control" id="exampleInputUser1" aria-describedby="userHelp"/>
                        <div id="userHelp" className="form-text">We'll never share your UserName with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    );
}

export default Login;
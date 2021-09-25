import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })
    const [doRedirect, setRedirect] = useState(false);

    const formHandler = (ev) =>{
        
        ev.preventDefault();
        console.log(process.env.REACT_APP_SERVER_URL)
        axios.post('/rocksolid/api/v1/auth/login', {...userLogin})
        .then((response)=>{
            console.log(response);
            if(response.data.success)
            {

                // window.location.href = '/exchange';
                setRedirect(true);
            }
            else
            {
                console.log("Invalid or Etc");
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    const changeHandler = (e) =>{
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    const clickHandler = () =>{
        // setUserLogin({email:'', password:''})
    }

    console.log(userLogin)
    if (doRedirect) {
        return <Redirect to='/exchange'/>;
      }

    return (
        
            <div className='login-wrapper'>
            <h1 className='login-heading'>Sign In</h1>
            <p className='login-header-para'><i className="fas fa-user"></i>
                <span>Sign Into Your Account</span>
            </p>

            <form action="" className='login-form' onSubmit={formHandler}>
                
                <div className='form-fields'>
                    <input 
                    type="email" 
                    placeholder='Email Address'
                    name='email'
                    onChange={changeHandler}/>
                </div>
                <div className='form-fields'>
                    <input 
                    type="password" 
                    placeholder='Password'
                    name='password'
                    onChange={changeHandler}/>
                </div>
                
                <button className='login-btn' onClick={clickHandler}>Sign In</button>
            </form>

            <p className='login-footer-para'>Already have an account? <Link to='/register'>Sign Up</Link></p>
        </div>

    )
}

export default Login

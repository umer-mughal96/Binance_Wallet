import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const formHandler = (ev) =>{
        ev.preventDefault()
    }
    const changeHandler = (e) =>{
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    const clickHandler = () =>{
        setUserLogin({email:'', password:''})
    }

    console.log(userLogin)

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
                
                <button className='login-btn' onClick={clickHandler}>Register</button>
            </form>

            <p className='login-footer-para'>Already have an account? <Link to='/register'>Sign Up</Link></p>
        </div>

    )
}

export default Login

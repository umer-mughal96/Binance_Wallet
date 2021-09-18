import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Register = () => {
    
    
    const [userSignUp, setUserSignUp] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    console.log()
    const formHandler = (ev) =>{
        ev.preventDefault()
        axios.post('http://localhost:9000/rocksolid/api/v1/auth/register', {...userSignUp})
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    const changeHandler = (e) =>{
        setUserSignUp({...userSignUp, [e.target.name]: e.target.value})
    }
    const clickHandler = () =>{
        
        // setUserSignUp({name:'', email:'', password:'', confirmPassword:''})
    }
    console.log(userSignUp)
    
    return (
        <div className='register-wrapper'>
            <h1 className='register-heading'>Sign Up</h1>
            <p className='register-header-para'><i className="fas fa-user"></i>
                <span>Create Your Account</span>
            </p>

            <form action="" className='register-form' onSubmit={formHandler}>
                <div className='form-fields'>
                    <input 
                    type="text" 
                    placeholder='Name'
                    name='name'
                    onChange={changeHandler}/>
                </div>
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
                <div className='form-fields'>
                    <input 
                    type="password" 
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    onChange={changeHandler}/>
                </div>
                <button className='register-btn' onClick={clickHandler}>Register</button>
            </form>

            <p className='register-footer-para'>Already have an account? <Link to='/login'>Sign In</Link></p>
        </div>
    )
}



export default Register

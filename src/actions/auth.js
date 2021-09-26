import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../components/Toastify/Toastify";
import {login, register} from '../services/auth'
import * as authConstants from "./constants";


const SERVER_URL = 'http://localhost:3000'

// export const [doRedirect, setDoRedirect] = useState(false)
export const registerUser = (formData, history) => async dispatch => {

    
    try {
        dispatch({type : authConstants.REGISTER_USER})

        const res = await register(formData)
        console.log(res.data.msg)
        if(res.status == 201){
            dispatch({type : authConstants.REGISTER_USER_SUCCESS})
            successNotification("Register Success")
            setTimeout(()=>{
                history.push('/login')
            }, 2800)
                 
        }
        console.log(history)
    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({type : authConstants.REGISTER_USER_FAIL , payload : error})
        errorNotification("Register Failed")
    }
}

export const loginUser = (formData, history) => async(dispatch) => {
    
    console.log(history)
    try {
        dispatch({ type: authConstants.LOGIN_USER })

        const res = await login(formData)
        // res.data.loginUser.map((obj)=>{
        //     console.log(...obj)
        // })
        
        if(res.status == 200){
            console.log(res.data.loginUser)
            // const userName = res.data.loginUser.name
            const userData = res.data.loginUser
            console.log(userData)
            dispatch({type: authConstants.LOGIN_USER_SUCCESS, payload: userData})
            successNotification("Login Successfully")
            // history.push('/exchange')
            setTimeout(()=>{
                history.push('/exchange')
            }, 2800)
        }    
        
    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({type: authConstants.LOGIN_USER_FAIL, payload: formData})
        errorNotification("Login Failed")
    }
}

export const postExchange = () => {
    console.log("function")
    const data = {
        success: true,
        msg: 'authorized'
    }

    axios.post('http://localhost:9000/rocksolid/api/v1/wallet/getbalance', { ...data })
        .then(res => console.log(res))
}
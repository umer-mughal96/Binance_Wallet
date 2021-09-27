
import { errorNotification, successNotification } from "../components/Toastify/Toastify";
import { login, register, wallet } from '../services/auth'
import * as authConstants from "./constants";


export const registerUser = (formData, history) => async dispatch => {

    try {
        dispatch({ type: authConstants.REGISTER_USER })

        const res = await register(formData)
        console.log(res.data.msg)
        if (res.status == 201) {
            dispatch({ type: authConstants.REGISTER_USER_SUCCESS })
            successNotification("Register Success")
            setTimeout(() => {
                history.push('/login')
            }, 2800)

        }
        console.log(history)
    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({ type: authConstants.REGISTER_USER_FAIL, payload: error })
        errorNotification("Register Failed")
    }
}

export const loginUser = (formData, history) => async (dispatch) => {

    console.log(history)
    try {
        dispatch({ type: authConstants.LOGIN_USER })

        const res = await login(formData)
        // res.data.loginUser.map((obj)=>{
        //     console.log(...obj)
        // })
        // function getCookie() {
        //     if (document.cookie.length != 0) {
        //         //Invoking key-value pair stored in a cookie
        //         alert(document.cookie);
        //     }
        //     else {
        //         alert("Cookie not available")
        //     }
        // }

        if (res.status == 200) {
            // getCookie()
            // console.log(res.data.loginUser)
            const userData = res.data.loginUser

            dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload: userData })
            successNotification("Login Successfully")
            // history.push('/exchange')
            setTimeout(() => {
                history.push('/exchange')
                postExchange(res.data.loginUser._id)
            }, 2800)
        }

    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({ type: authConstants.LOGIN_USER_FAIL, payload: formData })
        errorNotification("Login Failed")
    }
}

export const postExchange = (userID) => async (dispatch) => {
    console.log("function")
    // const data = {
    //     success: true,
    //     msg: 'authorized'
    // }

    try {
        const res = await wallet(userID)
        console.log(res)
        dispatch({ type: authConstants.POST_EXCHANGE, payload: res })
    } catch (error) {

    }
}
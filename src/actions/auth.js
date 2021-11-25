
import { errorNotification, successNotification } from "../components/Toastify/Toastify";
import { forgetPass, login, register, wallet } from '../services/auth'
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
        
        if (res.status == 200) {
            
            const userData = res.data.loginUser

            dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload: userData })
            successNotification("Login Successfully")
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

export const resetPass = (formData) => async (dispatch) => {

    try {
        dispatch({ type: authConstants.LOGIN_USER })

        const res = await forgetPass(formData)
        const userData = res.data

        dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload: userData })
        successNotification("Login Successfully")


    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({ type: authConstants.LOGIN_USER_FAIL, payload: error })
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
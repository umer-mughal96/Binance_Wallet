
import axios from "axios";
import { errorNotification, successNotification } from "../components/Toastify/Toastify";
import { activation, forgetPass, login, passReset, register, wallet } from '../services/auth'
import * as authConstants from "./constants";


export const registerUser = (formData, history) => async dispatch => {

    try {
        dispatch({ type: authConstants.REGISTER_USER })

        const res = await register(formData)
        console.log("🚀 ~ file: auth.js ~ line 13 ~ res", res)


        dispatch({ type: authConstants.REGISTER_USER_SUCCESS })
        successNotification("Register Success")
        history.push('/login')

    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error?.response?.data?.message || error)
        console.log('register')
        dispatch({ type: authConstants.REGISTER_USER_FAIL, payload: error })
        errorNotification(error?.response?.data?.message || error.message)
    }
}

export const activateUser = (formData, history) => async dispatch => {

    try {
        dispatch({ type: authConstants.REGISTER_USER })

        const res = await activation(formData)


        dispatch({ type: authConstants.REGISTER_USER_SUCCESS })
        successNotification("Link Activated")
        history.push('/login')

    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        dispatch({ type: authConstants.REGISTER_USER_FAIL, payload: error })
        errorNotification('Activation Fail')
    }
}

export const loginUser = (formData, history) => async (dispatch) => {

    console.log(history)
    try {
        dispatch({ type: authConstants.LOGIN_USER })

        const res = await login(formData)
        // const res = await axios.post(`/login`, formData)
        // await axios.post(`/login`, formData).then(res => console.log(res)).catch(e => console.log(e))
        console.log("🚀 ~ file: auth.js ~ line 54 ~ loginUser ~ res", res)

        const userData = res.data
        dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload: userData })
        successNotification("Login Successfully")
        history.push('/exchange')


    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error?.response?.data?.message || error.message)
        dispatch({ type: authConstants.LOGIN_USER_FAIL, payload: error })
        errorNotification(error?.response?.data?.message || error.message)
    }
}

export const forgetPassAction = (formData) => async (dispatch) => {

    try {
        dispatch({ type: authConstants.LOGIN_USER })

        const res = await forgetPass(formData)
        const userData = res.data
        console.log(userData)
        successNotification("Password reset link has been sent on your email")


    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        errorNotification(error)
    }
}


export const passResetAction = (formData, history) => async (dispatch) => {

    try {
        const res = await passReset(formData)
        const userData = res.data
        console.log(userData)
        history.push('/login')


    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 40 ~ error", error)
        errorNotification(error)
    }
}


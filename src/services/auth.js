import axios from "axios"


export const register = (formData) => {
    return axios.post(`/signup`, formData)
}

export const activation = (formData) => {
    return axios.post(`/activation`, formData)
}

export const login = (formData) =>{
    return axios.post(`/login`, formData)
}

export const forgetPass = (formData) => {
    return axios.post(`/forgot/password`, formData)
}

export const passReset = (formData) => {
    return axios.post(`/password/reset`, formData)
}

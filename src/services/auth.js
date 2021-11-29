import axios from "axios"


export const register = async (formData) => {
    return await axios.post(`/signup`, formData)
}

export const activation = async (formData) => {
    return await axios.post(`/activation`, formData)
}

export const login = async (formData) => {
    return await axios.post(`/login`, formData)
}

export const forgetPass = async (formData) => {
    return await axios.put(`/forgot/password`, formData)
}

export const passReset = async (formData) => {
    return await axios.put(`/password/reset`, formData)
}

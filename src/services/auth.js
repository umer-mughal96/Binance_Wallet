import axios from "axios"


export const register = (formData) => {
    return axios.post('http://rocksolidbackend.herokuapp.com/rocksolid/api/v1/auth/register',formData)
}

export const login = (formData) =>{
    return axios.post('http://rocksolidbackend.herokuapp.com/rocksolid/api/v1/auth/login', formData)
}

export const wallet = (userID) =>{
    return axios.post('http://rocksolidbackend.herokuapp.com/rocksolid/api/v1/wallet/getbalance', userID)
}
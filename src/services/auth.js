import axios from "axios"


export const register = (formData) => {
    return axios.post('http://localhost:9000/rocksolid/api/v1/auth/register',formData)
}

export const login = (formData) =>{
    return axios.post('http://localhost:9000/rocksolid/api/v1/auth/login', formData)
}
import axios from "axios"
const BASE_URL = "http://localhost:4000"

function createLogin(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body)
}

function createSession(body){
    return axios.post(`${BASE_URL}/auth/sign-in`, body)
}

const api = {
    createLogin,
    createSession
}

export default api
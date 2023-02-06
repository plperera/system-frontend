import axios from "axios"
const BASE_URL = "http://localhost:4000"

function CreateLogin(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body)
}
function CreateSession(body){
    return axios.post(`${BASE_URL}/auth/sign-in`, body)
}
function CreateProduct(body, token){
    return axios.post(`${BASE_URL}/products/new`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
function CreateClient(body, token){
    return axios.post(`${BASE_URL}/clients`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
function CreateAddress(body, token){
    return axios.post(`${BASE_URL}/address`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
function GetAllProducts(token){
    return axios.get(`${BASE_URL}/products`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
function GetAllClients(token){
    return axios.get(`${BASE_URL}/clients`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
function GetAllAddressByClientId(token, clientId){
    return axios.get(`${BASE_URL}/address/all/${clientId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

const api = {
    CreateLogin,
    CreateSession,
    CreateProduct,
    GetAllProducts,
    CreateClient,
    GetAllClients,
    CreateAddress,
    GetAllAddressByClientId
}

export default api
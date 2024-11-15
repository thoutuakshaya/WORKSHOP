
import axios from 'axios'
//import { User } from 'lucide-react'


const API = 'http://localhost:4000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const getProductsCount = () => axios.get(`${API}/products/count`)
// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const addOrder = (order) => axios.post(`${API}/orders/add`, order)
const editOrder = (order, id) => axios.put(`${API}/orders/edit/${id}`, order)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
//UserEndPoints
const getUsersCount = () => axios.get(`${API}/users/count`)
const getUser = () => axios.get(`${API}/users/all`)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const resetPassword = (password, id) => axios.put(`${API}/users/resetPassword/${id}`, password)
//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export {
    Login,
    Register,
    editUser,
    editOrder,
    editProduct,
    getProducts, 
    getOrders,
    getUser,
    addUser,
    addProduct, 
    addOrder,
    deleteUser,
    deleteOrder,
    deleteProduct,
    getProductsCount,
    getUsersCount,
    getOrdersCount,
    resetPassword
     }
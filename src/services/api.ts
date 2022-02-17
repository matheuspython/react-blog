import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://blog-apiiii.herokuapp.com/'
})
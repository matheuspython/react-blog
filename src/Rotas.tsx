import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import { EnviaPost } from './pages/EnviaPost'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SendBlogPost } from './pages/PostarBlog'

export const Rotas:React.FC = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post' element={<SendBlogPost />} />
        <Route path='/enviaPost' element={<EnviaPost />} />
      </Routes>
    </>
  )
}
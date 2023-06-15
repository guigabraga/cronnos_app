//Imports:
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//Pages:
import Login from '../public-pages/Login'
import Cadastro from '../public-pages/Cadastro'
import RecuperarSenha from '../public-pages/Recuperar-senha'
//Rotas públicas:
function PublicRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/recuperar-senha' element={<RecuperarSenha/>}/>
                <Route path='*' element={<Navigate to='/login' />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default PublicRoutes
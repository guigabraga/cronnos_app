import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./global-style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import RecuperarSenha from './routes/Recuperar-senha'
import Home from './routes/Home'

import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'

import SideBar from './components/HomeSideBar'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/recuperar-senha' element={<RecuperarSenha/>}/>
            </Routes>
            <SideBar>
                <Routes>
                    <Route path='/home' element={<Dashboard/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/pedidos' element={<Pedidos/>}/>
                </Routes>
            </SideBar>
        </BrowserRouter>
    )
}

export default App
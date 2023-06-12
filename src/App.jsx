//Imports:
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Styles:
import "./global-style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
//Rotas:
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import RecuperarSenha from './routes/Recuperar-senha'
import Home from './routes/Home'
//Pages:
import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'
import ProdutosEstoque from './pages/ProdutosEstoque'
//Components:
import SideBar from './components/HomeSideBar'

function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/recuperar-senha' element={<RecuperarSenha/>}/>
                    <Route element={<Home/>}>
                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='pedidos' element={<Pedidos/>}/>
                        <Route path='produtos-estoque' element={<ProdutosEstoque/>}/>
                    </Route>
                </Routes>
                {/* <SideBar>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/pedidos' element={<Pedidos/>}/>
                    </Routes>
                </SideBar> */}
            </BrowserRouter>
        </>
    )
}

export default App
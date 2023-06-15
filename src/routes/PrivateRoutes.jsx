//Imports:
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//Pages:
import Home from '../private-pages/Home'
import Dashboard from '../private-pages/Dashboard'
import Pedidos from '../private-pages/Pedidos'
import ProdutosEstoque from '../private-pages/ProdutosEstoque'
import ErrorPage from '../private-pages/Error'
//Rotas Privadas:
function PrivateRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='pedidos' element={<Pedidos/>}/>
                    <Route path='produtos-estoque' element={<ProdutosEstoque/>}/>
                    <Route path='error' element={<ErrorPage/>}/>
                    <Route path='*' element={<Navigate to='/error' />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default PrivateRoutes
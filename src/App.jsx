//Imports:
import React, { useContext } from 'react'
//Styles:
import "./global-style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
//Rotas:
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
//Autenticação:
import { AuthContext } from './contexts/AuthContext'
//Renderização:
function App(){
    const { auth } = useContext(AuthContext)
    return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
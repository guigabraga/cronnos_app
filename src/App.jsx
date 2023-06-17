import React, { useContext } from 'react'

import './global-style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'

import { AuthContext } from './contexts/AuthContext'

function App(){
    const { auth } = useContext(AuthContext)
    return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
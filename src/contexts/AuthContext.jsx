//Imports:
import React, { createContext, useState } from 'react'
//
export const AuthContext = createContext()
//Componente provider:
function AuthProvider({children}){
    //Condição para manter usuário logado
    const authUserContext = sessionStorage.getItem('userAuth')
    //Estados:
    const [auth, setAuth] = useState(authUserContext ? true : false)

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({children}){

    const authUserContext = sessionStorage.getItem('userAuth')

    const [auth, setAuth] = useState(authUserContext ? true : false)

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthProvider
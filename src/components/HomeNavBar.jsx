import React, { useState, useEffect } from 'react'
import { Navbar } from 'reactstrap'
//Icones:
import { TiUser } from 'react-icons/ti'
//Componentes:
import HomeNavBarDropdown from './HomeNavBarDropdown'

function HomeNavBar({children}){
    //Nome do usuario no sessionStorage:
    const sessionUserName =  sessionStorage.getItem('userName')
    //Data/Hora realtime:
    const [dateState, setDateState] = useState(new Date())
    useEffect(() => {
            setInterval(() => setDateState(new Date()), 10000);
    }, []);  
    return(
        <div className='w-100 container-nav-bar'>
            <Navbar className='w-100 shadow home-nav-bar'>
                <div className='ms-auto'>
                    <div className='hstack px-3 gap-2'>
                        <div className='rounded home-navbar-user-icon shadow'>
                            <TiUser className='cronnos-font-30 icon-user'/>
                        </div>
                        <div>
                            <span className='cronnos-font-14 fw-bold d-block'>{sessionUserName}</span>
                            <span className='cronnos-font-12 d-block'>{dateState.toLocaleString('pt-BR', {dateStyle:'full'})}</span>
                        </div>
                        <div className='ps-2'>
                            <HomeNavBarDropdown/>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div>{children}</div>
        </div>
    )
}

export default HomeNavBar
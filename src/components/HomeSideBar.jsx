import React, { useState } from 'react'
import { useNavigate, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { AiOutlineMenuFold } from 'react-icons/ai'

import CronnosLogoSmall from '../assets/cronnos-logo-small.svg'
import Dashboard from '../routes/Dashboard'
import Tables from '../pages/Tables'

function SideBar(){
    return(
        <div>
            <div className='sideBarHome cronnos-bg-sidebar shadow'>
                <div className='hstack gap-3 mx-3'>
                    <img className='rounded bg-light p-1 my-3' src={CronnosLogoSmall} width='50px'/>
                    <div>
                        <span className='d-block text-light cronnos-font-12 fw-medium'>Usuário</span>
                        <span className='d-block text-light fw-bold cronnos-font-14'>Guilherme Braga</span>
                    </div>
                    <div className='ms-auto'>
                        <AiOutlineMenuFold className='text-light cronnos-font-30'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
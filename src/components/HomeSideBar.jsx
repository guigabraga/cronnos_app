import React, { useState } from 'react'
import { useNavigate, Link, BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
//Icones:
import { TiThMenu, TiThLarge, TiChevronRight, TiShoppingCart, TiThList } from 'react-icons/ti'

import CronnosLogoSmall from '../assets/cronnos-logo-small.svg'
import Dashboard from '../routes/Dashboard'
import Tables from '../pages/Tables'

function SideBar({children}){
    //Nome do usuario no sessionStorage:
    const sessionUserName =  sessionStorage.getItem('userName')
    //Itens dos menus:
    const menuItens = [
        {
            path: "/dahsboard",
            name: "Dashboard",
            icon: <TiThLarge/>
        },
        {
            path: "/dahsboard",
            name: "Pedidos",
            icon: <TiShoppingCart/>
        },
        {
            path: "/dahsboard",
            name: "Produtos / Estoque",
            icon: <TiThList/>
        }
    ]
    return(
        <div>
            <div className='sideBarHome cronnos-bg-sidebar shadow'>
                <div className='shadow home-side-bar-title'>
                    <div className='mx-3 hstack gap-3'>
                        <img className='rounded p-1 my-3 cronnos-box-shadow-primary bg-light' src={CronnosLogoSmall} width='50px'/>
                        <div>
                            <span className='d-block text-light cronnos-font-12 fw-medium'>Painel</span>
                            <span className='d-block cronnos-text-primary fw-bold cronnos-font-14 '>Administração</span>
                        </div>
                        <div className='ms-auto'>
                            <a className='text-light cronnos-font-20'><TiThMenu/></a>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='cronnos-font-10 cronnos-text-insert mx-4'>MENU DE NAVEGAÇÃO</p>
                    <div>
                        {
                            menuItens.map((item, index) =>(
                                <NavLink to={item.path} key={index} activeclassName='active' className='text-decoration-none'>
                                    <div className='hstack gap-3 item-menu px-4 py-2'>
                                        <div className='ronnos-font-15'>{item.icon}</div>
                                        <div className='cronnos-font-15 fw-semibold'>{item.name}</div>
                                        <div className='cronnos-font-15 ms-auto'><TiChevronRight/></div>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideBar
import React, { useState } from 'react'
import { useNavigate, Link, BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
//Icones:
import { TiThMenu, TiThLarge, TiChevronRight, TiShoppingCart, TiThList } from 'react-icons/ti'

import HomeNavBar from './HomeNavBar'

import CronnosLogoSmall from '../assets/cronnos-logo-small.svg'
import Dashboard from '../pages/Dashboard'
import Tables from '../pages/Tables'

function SideBar({children}){
    //Nome do usuario no sessionStorage:
    const sessionUserName =  sessionStorage.getItem('userName')
    //Abrir e fechar Sidebar:
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const toggle = () => setSideBarOpen(!sideBarOpen)
    //Itens dos menus:
    const menuItens = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <TiThLarge/>
        },
        {
            path: "/pedidos",
            name: "Pedidos",
            icon: <TiShoppingCart/>
        },
        {
            path: "dahsboard",
            name: "Produtos / Estoque",
            icon: <TiThList/>
        }
    ]
    return(
        <div className='home-container'>
            <div className='sideBarHome cronnos-bg-sidebar shadow' style={{width: sideBarOpen ? '300px': '50px'}}>
                <div className='shadow home-side-bar-title'>
                    <div className='mx-3 hstack gap-3'>
                        <img className='rounded p-1 my-3 cronnos-box-shadow-primary bg-light sidebar-title-icon' style={{display: sideBarOpen ? 'block': 'none'}} src={CronnosLogoSmall}/>
                        <div style={{display: sideBarOpen ? 'block': 'none'}}>
                            <span className='d-block text-light cronnos-font-12 fw-medium'>Painel</span>
                            <span className='d-block cronnos-text-primary fw-bold cronnos-font-14'>Administração</span>
                        </div>
                        <div className='ms-auto' style={{height: sideBarOpen ? '': '71.5px', paddingTop : sideBarOpen ? '': '20px'}}>
                            <a type='button' className='text-light cronnos-font-20' onClick={toggle}><TiThMenu/></a>
                        </div>
                    </div>
                </div>
                <div className='mt-4 home-side-bar-body'>
                    <p className='cronnos-font-10 cronnos-text-insert mx-4 transition' style={{display: sideBarOpen ? 'block': 'none'}}>MENU DE NAVEGAÇÃO</p>
                    <div>
                        {
                            menuItens.map((item, index) =>(
                                <NavLink to={item.path} key={index} className='text-decoration-none item-menu' activeclassname='active'>
                                    <div className='hstack gap-3 py-2 item-menu-div'>
                                        <div style={{paddingLeft: sideBarOpen ? '25px': '15px', fontSize: sideBarOpen ? '15px': '20px'}}>{item.icon}</div>
                                        <div className='cronnos-font-15 fw-semibold' style={{display: sideBarOpen ? 'block': 'none'}}>{item.name}</div>
                                        <div className='cronnos-font-15 ms-auto pe-4' style={{display: sideBarOpen ? 'block': 'none'}}><TiChevronRight/></div>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <HomeNavBar>{children}</HomeNavBar>
        </div>
    )
}

export default SideBar
import React from 'react'
import SideBar from '../components/HomeSideBar'
import { TiThList } from 'react-icons/ti'

function ProdutosEstoque(){
    return(
        <SideBar>
            <div className='hstack gap-2'>
                <div className='rounded home-navbar-user-icon shado'>
                    <TiThList className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-14'>Produtos / Estoque</span>
                </div>
            </div>
            <div>
                
            </div>
        </SideBar>
    )
}

export default ProdutosEstoque
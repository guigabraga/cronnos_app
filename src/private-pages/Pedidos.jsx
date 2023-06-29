import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

import Pendentes from '../components/Pedidos/Pendentes'
import Separacao from '../components/Pedidos/Separacao'
import Concluidos from '../components/Pedidos/Concluidos'
import Loja from '../components/Pedidos/Loja'

function Pedidos(){

    return(

        <div className='p-4'>
            <div className='hstack gap-2'>
                <div className='rounded div-icon-page shadow'>
                    <TiShoppingCart className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-20'>Pedidos</span>
                </div>
            </div>
            <div className='mt-3'>
                <Loja/>
            </div>
            <div className='ps-3'>
                <div className='border-color-primary mt-2 ps-3 py-3'>
                    <div className='row gap-3 px-3'>
                        <Pendentes/>
                        <Separacao/>
                        <Concluidos/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Pedidos
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

function Pedidos(){
    return(
        <div className='p-4'>
            <div className='hstack gap-2'>
                <div className='rounded div-icon-page shadow'>
                    <TiShoppingCart className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-14'>Pedidos</span>
                </div>
            </div>
        </div>
    )
}

export default Pedidos
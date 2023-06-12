import React from 'react'
import { TiThList } from 'react-icons/ti'

function ProdutosEstoque(){
    return(
        <div className='p-4'>
            <div className='hstack gap-2'>
                <div className='rounded div-icon-page shadow'>
                    <TiThList className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-14'>Produtos / Estoque</span>
                </div>
            </div>
            <div className='ps-3'>
                <div className='border-color-primary mt-2 ps-3 py-3'>
                    <button type="button" className='btn btn-primary btn-sm shadow'>Novo produto</button>
                </div>
            </div>
        </div>
    )
}

export default ProdutosEstoque
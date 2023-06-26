import React from 'react'
import { TiThList } from 'react-icons/ti'

import ModalNovoProduto from '../components/ProdutosEstoque/ModalNovoProduto'
import TableProdutos from '../components/ProdutosEstoque/TableProdutos'

function ProdutosEstoque(){
    return(
        <div className='p-4'>
            <div className='hstack gap-2'>
                <div className='rounded div-icon-page shadow'>
                    <TiThList className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-20'>Produtos / Estoque</span>
                </div>
            </div>
            <div className='ps-3'>
                <div className='border-color-primary mt-2 ps-3 py-3'>
                    <ModalNovoProduto/>
                    <TableProdutos/>
                </div>
            </div>
        </div>
    )
}

export default ProdutosEstoque
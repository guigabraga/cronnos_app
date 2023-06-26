import React, { useState, useEffect} from 'react'
import Axios from 'axios'

import LoadSpinner from '../LoadSpinner'

function TableProdutos({refrashTable}){

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(true)
    const [renderTable, setRenderTable] = useState([])

    useEffect(() => {

        Axios.post('http://31.220.31.209:5001/select-product', {
            timeout: 10000
        })
        .then(function (response) {
            const dataSelecProduct = [response.data.response.data]
            setRenderTable(dataSelecProduct[0].data)
            setRemoveLoadSpinner(false)
        })
        .catch(function (error) {
            console.log(error)
            setRemoveLoadSpinner(false)
        })

    }, [refrashTable])

    return(
        <div className='m-1'>
            {
                removeLoadSpinner ? (<LoadSpinner/>) :
                <div className='table-responsive'>
                    <table className="table table-striped mt-3 table-bordered">
                        <thead className='shadow bg-primary text-light cronnos-font-12'>
                            <tr>
                                <th scope="col">ID Item</th>
                                <th scope="col">Item</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className='cronnos-font-10'>
                        { 
                            renderTable.map( (item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.hash_product}</td>
                                        <td>{item.name_product}</td>
                                        <td>{item.model_product}</td>
                                        <td>{item.brand_product}</td>
                                        <td className='text-center'>{item.description}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
    
}

export default TableProdutos
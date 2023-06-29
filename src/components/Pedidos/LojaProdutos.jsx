import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { Button } from 'reactstrap'

import LoadSpinner from '../LoadSpinner'

function LojaProdutos(){

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(true)
    const [renderProducts, setRenderProducts] = useState([])

    useEffect(() => {

        Axios.post('http://31.220.31.209:5001/select-product', {
            status: 1
        },
        {
            timeout: 10000
        })
        .then(function (response) {
            const dataSelecProduct = [response.data.response.data]
            setRenderProducts(dataSelecProduct[0].data)
            setRemoveLoadSpinner(false)
        })
        .catch(function (error) {
            console.log(error)
            setRemoveLoadSpinner(false)
        })

    }, [])

    return(
        <div>
            {
                removeLoadSpinner ? (<LoadSpinner/>) :
                <div className='row gap-3 px-5'>
                    {
                        renderProducts.map((item, index) =>{
                            return(
                                <div className='col-lg-2 col-md-4 col-sm-6 p-2 shadow-sm border bg-light' key={index}>
                                    <span className='d-block fw-bold cronnos-font-12'>{item.name_product}</span>
                                    <span className='d-block cronnos-font-10 mt-2'>{item.model_product}</span>
                                    <span className='d-block cronnos-font-10'>{item.brand_product}</span>
                                    <span className='d-block cronnos-font-10 mt-2'>{item.description}</span>
                                    <Button color="primary" size="sm" className='shadow w-100 mt-2'>Solicitar</Button>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )

}

export default LojaProdutos
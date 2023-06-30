import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { IoMdAlert } from 'react-icons/io'

import LoadSpinner from '../LoadSpinner'

function Pendentes(){

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(true)
    const [renderProducts, setRenderProducts] = useState([])

    useEffect(() => {

        Axios.post('http://31.220.31.209:5001/select-sale', {
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

    function formatarData(data) {

        var ano = data.getFullYear();
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);
        var dia = ("0" + data.getDate()).slice(-2);
        var hour = ("0" + data.getHours()).slice(-2);
        var minute = ("0" + data.getMinutes()).slice(-2);
        var seconds = ("0" + data.getSeconds()).slice(-2);

        var dataFormatada = dia + "/" + mes + "/" + ano + " " + hour + ":" + minute + ":" + seconds;
        return dataFormatada;

    }

    return(

        <div className='col border rounded shadow-sm p-3'>
            <div className='hstack gap-2'>
                <IoMdAlert className='cronnos-font-30 text-danger'/>
                <span className='cronnos-font-14 fw-semibold'>Pendentes</span>
            </div>
            {
                removeLoadSpinner ? (<LoadSpinner/>) :
                <div className='mt-2'>
                    {
                        renderProducts.map((item, index) =>{
                            const dataFormatada = formatarData(new Date(item.date_insert))
                            return(
                                <div className='shadow-sm border bg-danger text-light p-3' key={index}>
                                    <span className='d-block fw-bold cronnos-font-12'>{item.name_product}</span>
                                    <span className='d-block cronnos-font-12'>{dataFormatada}</span>
                                    <span className='d-block cronnos-font-10 mt-2'>{item.model_product}</span>
                                    <span className='d-block cronnos-font-10'>{item.brand_product}</span>
                                    <span className='d-block cronnos-font-10 mt-2'>{item.description}</span>
                                    <span className='d-block cronnos-font-10 mt-2 fw-bold'>{item.hash_sale}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>

    )
    
}

export default Pendentes
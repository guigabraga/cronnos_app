import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Axios from 'axios'

import LoadSpinner from '../LoadSpinner'

const validadeForm = yup.object().shape({

    nameProduct: yup.string().required('Campo obrigatório!').max(150, 'Número máximo de caracteres ultrapassado (150)'),
    modelProduct: yup.string().required('Campo obrigatório!').max(150, 'Número máximo de caracteres ultrapassado (150)'),
    brandProduct: yup.string().required('Campo obrigatório!').max(150, 'Número máximo de caracteres ultrapassado (150)'),
    description: yup.string().required('Campo obrigatório!').max(500, 'Número máximo de caracteres ultrapassado (500)'),

})

function FormNovoProduto({refrashTable, setRefrashTable}){

    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: yupResolver(validadeForm)

    })

    const [loadSpinner, setLoadSpinner] = useState(false)

    const [success, setSuccess] = useState(false)

    function InsertProduct(data){

        //props.modal()
        setLoadSpinner(true)

        data.userToken = sessionStorage.getItem('userToken')

        Axios.post('http://31.220.31.209:5001/insert-product', data, {
            timeout: 10000,
        })
        .then(function (response) {
            setSuccess(true)
            setLoadSpinner(false)
            setRefrashTable(refrashTable + 1)
        })
        .catch(function (error) {
            console.log(error)
        })

    }

    return(
        <div className='px-4'>
            {
                loadSpinner ? (<LoadSpinner/>) : success ? 

                <div className='text-center fw-bold'>Produto cadastrado com sucesso!</div> :

                <form onSubmit={handleSubmit(InsertProduct)}>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='mb-3'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Produto</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.nameProduct?.message}</span>
                                </div>
                                <input type='text' name='nameProduct' {...register('nameProduct')} className='form-control form-control-sm' placeholder='Torneira'/>
                            </div>
                            <div className='mb-3'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Modelo</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.modelProduct?.message}</span>
                                </div>
                                <input type='text' className='form-control form-control-sm' name='modelProduct' {...register('modelProduct')} placeholder='MX5-44' autoComplete="on" />
                            </div>
                            <div className='mb-3'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Marca</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.brandProduct?.message}</span>
                                </div>
                                <input type='text' className='form-control form-control-sm' name='brandProduct' {...register('brandProduct')} placeholder='Torneiras LTDA' autoComplete="on" />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='mb-3'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Descrição</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.description?.message}</span>
                                </div>
                                <textarea type='text' className='form-control form-control-sm' name='description' {...register('description')} rows={5} autoComplete="on"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <button type='submit' className='btn btn-primary btn-sm w-100 shadow'>Cadastrar</button>
                    </div>
                </form>
            }
        </div>
    )

}

export default FormNovoProduto
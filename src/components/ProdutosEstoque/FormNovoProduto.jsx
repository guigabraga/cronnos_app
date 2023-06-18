import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validadeForm = yup.object().shape({

    nameProduct: yup.string().required('Campo obrigatório!').max(10, 'Número máximo de caracteres ultrapassado (150)'),
    modelProduct: yup.string().required('Campo obrigatório!')

})

function FormNovoProduto(){

    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: yupResolver(validadeForm)

    })

    return(
        <div className='px-4'>
            <form onSubmit={handleSubmit()}>
                <div className='mb-3'>
                    <div className='hstack'>
                        <span className='form-label cronnos-font-12 fw-semibold'>Produto</span>
                        <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.nameProduct?.message}</span>
                    </div>
                    <input type='text' name='nameProduct' {...register('nameProduct')} className='form-control form-control-sm border-primary' placeholder='Torneira'/>
                </div>
                <div className='mb-3'>
                    <div className='hstack'>
                        <span className='form-label cronnos-font-12 fw-semibold'>Modelo</span>
                        <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.modelProduct?.message}</span>
                    </div>
                    <input type='text' className='form-control form-control-sm border-primary' name='modelProduct' {...register('modelProduct')} placeholder='MX5-44' autoComplete="on" />
                </div>
                <div className='mb-3'>
                    <div className='hstack'>
                        <span className='form-label cronnos-font-12 fw-semibold'>Marca</span>
                        <span className='cronnos-font-10 fw-medium text-danger ms-auto'></span>
                    </div>
                    <input type='text' className='form-control form-control-sm border-primary' name='pass' placeholder='Torneiras LTDA' autoComplete="on" />
                </div>
                <div className='mb-3'>
                    <div className='hstack'>
                        <span className='form-label cronnos-font-12 fw-semibold'>Descrição</span>
                        <span className='cronnos-font-10 fw-medium text-danger ms-auto'></span>
                    </div>
                    <textarea type='text' className='form-control form-control-sm border-primary' name='pass' rows={3} autoComplete="on"></textarea>
                </div>
                <div className=''>
                    <button type='submit' className='btn btn-primary btn-sm w-100'>Cadastrar</button>
                </div>
            </form>
        </div>
    )

}

export default FormNovoProduto
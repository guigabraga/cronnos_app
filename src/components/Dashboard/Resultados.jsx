import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { TiThMenu, TiThLarge, TiChevronRight, TiShoppingCart, TiThList } from 'react-icons/ti'

function Resultados(){
    return(
        <div className='shadow-sm rounded border p-3 m-1'>
            <span className='fw-semibold cronnos-font-14'>Resultados</span>
            <div className='row mt-4'>
                <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='shadow rounded p-3 text-center bg-primary m-1'>
                        <span className='d-block cronnos-font-30 fw-bold text-light'>10</span>
                        <span className='d-block text-light fw-bold'>Realizados</span>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='shadow rounded p-3 text-center bg-danger m-1'>
                        <span className='d-block cronnos-font-30 fw-bold text-light'>5</span>
                        <span className='d-block text-light fw-bold'>Pendentes</span>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='shadow rounded p-3 text-center bg-success m-1'>
                        <span className='d-block cronnos-font-30 fw-bold text-light'>5</span>
                        <span className='d-block text-light fw-bold'>Concluídos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultados
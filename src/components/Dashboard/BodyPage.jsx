import React from 'react'

import UltimosLogs from './UltimosLogs'
import Resultados from './Resultados'

function BodyPage(){
    return(
        <div className=''>
            <div className='row'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <UltimosLogs/>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <Resultados/>
                </div>
            </div>
        </div>
    )
}

export default BodyPage
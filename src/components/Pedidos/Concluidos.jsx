import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { AiFillCheckCircle } from 'react-icons/ai'

function Concluidos(){

    return(

        <div className='col border rounded shadow-sm p-3'>
            <div className='hstack gap-2'>
                <AiFillCheckCircle className='cronnos-font-30 text-success'/>
                <span className='cronnos-font-14 fw-semibold'>Concluídos</span>
            </div>
        </div>

    )
    
}

export default Concluidos
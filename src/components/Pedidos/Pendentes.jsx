import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { IoMdAlert } from 'react-icons/io'

function Pendentes(){

    return(

        <div className='col border rounded shadow-sm p-3'>
            <div className='hstack gap-2'>
                <IoMdAlert className='cronnos-font-30 text-danger'/>
                <span className='cronnos-font-14 fw-semibold'>Pendentes</span>
            </div>
        </div>

    )
    
}

export default Pendentes
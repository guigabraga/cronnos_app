import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { GiTimeSynchronization } from 'react-icons/gi'

function Separacao(){

    return(

        <div className='col border rounded shadow-sm p-3'>
            <div className='hstack gap-2'>
                <GiTimeSynchronization className='cronnos-font-30 text-info'/>
                <span className='cronnos-font-14 fw-semibold'>Em separação</span>
            </div>
        </div>

    )
    
}

export default Separacao
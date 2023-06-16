import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

//Componente:
function ErrorPage(){
    return(
        <div className='componentBody'>
            <div className='componentLogin'>
                <p>Error 404</p>
                <Link to='/dashboard'>ir para</Link>
            </div>
        </div>
    )
}

export default ErrorPage
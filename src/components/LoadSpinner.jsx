import React, { useState } from 'react'

function LoadSpinner(){
    return(
        <div>
            <div className='text-center mx-5'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default LoadSpinner
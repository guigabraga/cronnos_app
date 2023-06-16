import React from 'react'
import { TiThLarge } from 'react-icons/ti'

import BodyPage from '../components/Dashboard/BodyPage'

function Dashboard(){
    return(
        <div className='p-4'>
            <div className='hstack gap-2'>
                <div className='rounded div-icon-page shadow'>
                    <TiThLarge className='cronnos-font-20 icon-user'/>
                </div>
                <div>
                    <span className='fw-bold cronnos-text-info cronnos-font-14'>Dashboard</span>
                </div>
            </div>
            <div className='ps-3'>
                <div className='border-color-primary mt-2 ps-3 py-3'>
                    <BodyPage>
                        
                    </BodyPage>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
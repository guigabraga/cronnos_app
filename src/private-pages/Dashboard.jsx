import React from 'react'
import SideBar from '../components/HomeSideBar'
import ApexCharts from 'apexcharts'
import { TiThLarge } from 'react-icons/ti'

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
        </div>
    )
}

export default Dashboard
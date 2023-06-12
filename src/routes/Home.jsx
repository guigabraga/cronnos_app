import React, { useState } from 'react'

import Dashboard from '../pages/Dashboard'
import SideBar from '../components/HomeSideBar'
import HomeNavBar from '../components/HomeNavBar'

function Home(){
    return(
        <div className='home-container'>
            <SideBar />
            <HomeNavBar/>
        </div>
    )
}

export default Home
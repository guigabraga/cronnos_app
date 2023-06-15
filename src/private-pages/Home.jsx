//Imports:
import React, { useState } from 'react'
//Components:
import SideBar from '../components/HomeSideBar'
import HomeNavBar from '../components/HomeNavBar'
//Render:
function Home(){
    return(
        <div className='home-container'>
            <SideBar />
            <HomeNavBar/>
        </div>
    )
}

export default Home
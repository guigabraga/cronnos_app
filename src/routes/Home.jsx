import React, { useState } from 'react'
import { useNavigate, Link, BrowserRouter, Routes, Route } from 'react-router-dom'

import CronnosLogoSmall from '../assets/cronnos-logo-small.svg'
import SideBar from '../components/HomeSideBar'
import Dashboard from '../routes/Dashboard'
import Tables from '../pages/Tables'


function Home(){
    return(
        <div>
            <SideBar/>
        </div>
    )
}

export default Home
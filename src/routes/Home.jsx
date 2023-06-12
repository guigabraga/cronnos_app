import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

function Home({children}){
    return(
        <div>{children}</div>
    )
}

export default Home
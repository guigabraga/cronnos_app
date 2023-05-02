import React, { useState } from 'react';

const ButtonSideBarHome = () =>{

    function FunButtonSideBarHome(){

        const ButtonHomeSideBarStyle = document.getElementById("ButtonHomeSideBarStyle");
        ButtonHomeSideBarStyle.classList.add("shadow", "cronnos-bg-light");

        const ButtonDashboardSideBarStyle = document.getElementById("ButtonDashboardSideBarStyle")
        ButtonDashboardSideBarStyle.classList.remove("shadow", "cronnos-bg-light");

    };

    return(

        <>
            <a className='text-decoration-none cronnos-cursor-pointer' onClick={FunButtonSideBarHome}>
                <div id='ButtonHomeSideBarStyle' className='hstack cronnos-button-sideBarLink px-3 rounded-start ms-2 my-1'>
                    <span className='cronnos-font-14 text-dark fw-bold'>Home</span><span className='ms-auto'><i class="bi bi-house-fill cronnos-font-20 text-primary"></i></span>
                </div>
            </a>
        </>

    );

};

const ButtonSideBarDashBoard = () =>{

    function FunButtonSideBarDashBoard(){

        const ButtonHomeSideBarStyle = document.getElementById("ButtonHomeSideBarStyle");
        ButtonHomeSideBarStyle.classList.remove("shadow", "cronnos-bg-light");

        const ButtonDashboardSideBarStyle = document.getElementById("ButtonDashboardSideBarStyle")
        ButtonDashboardSideBarStyle.classList.add("shadow", "cronnos-bg-light");

    };

    return(

        <>
            <a className='text-decoration-none cronnos-cursor-pointer' onClick={FunButtonSideBarDashBoard}>
                <div id='ButtonDashboardSideBarStyle' className='hstack cronnos-button-sideBarLink px-3 rounded-start ms-2 my-1'>
                    <span className='cronnos-font-14 text-dark fw-bold'>Dashboard</span><span className='ms-auto'><i class="bi bi-clipboard2-data-fill cronnos-font-20 text-primary"></i></span>
                </div>
            </a>
        </>

    );

};


export {ButtonSideBarHome, ButtonSideBarDashBoard};
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CronnosLogoText from "../assets/cronnos-logo-text.svg"
import CronnosLogoIcon from "../assets/cronnos-logo-icon.svg"

import { ButtonSideBarHome } from './ButtonSideBar';
import { ButtonSideBarDashBoard } from './ButtonSideBar';

const SideBar = () =>{

    return(
        <div>
            <div className='sideBarHome shadow border-end'>
                <div className='mt-3 mx-2 hstack'>
                    <div>
                        <img src={CronnosLogoText} width="150px" />
                    </div>
                    <div className='ms-auto'>
                        <img src={CronnosLogoIcon} width="35px" />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='fw-semibold cronnos-font-12 mx-2 px-3'>
                        <span className='text-muted'>Menu</span>
                    </div>
                    <div className='mt-2'>
                        <ButtonSideBarHome />
                        <ButtonSideBarDashBoard />
                        <Link className='text-decoration-none'>
                            <div className='hstack cronnos-button-sideBarLink px-3 rounded-start ms-2'>
                                <span className='cronnos-font-14 text-dark fw-bold'>Estoque</span><span className='ms-auto'><i class="bi bi-database-fill cronnos-font-20 text-primary"></i></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default SideBar
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/Login.css";
import cronnosLogo from "../assets/cronnos-logo.svg";

function Login(){

    const AlertLogin = localStorage.getItem("status");

    return(
        <div className="componentBody">
            <div className="componentLogin">
                <div>
                    <img src={cronnosLogo} alt="" width="200px" />
                </div>
                <div className="mt-3">
                    <span className="fw-semibold cronnos-font-15">Bem vindo(a) a sua plataforma de gestão logística</span>
                </div>
                <div className='text-center mt-3'>
                    <span className='cronnos-font-11 fw-semibold'>{AlertLogin}</span>
                </div>
                <div className="text-start mt-3 mx-3">
                    <form>
                        <div className="mb-1">
                            <label className="form-label cronnos-font-12 fw-semibold">Email</label>
                            <input type="email" className="form-control form-control-sm border-primary" placeholder="cronnos@email.com"/>
                            <div className="cronnos-font-11 text-muted mt-2">Informe seu email cadastrado</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label cronnos-font-12 fw-semibold">Senha</label>
                            <input type="password" className="form-control form-control-sm border-primary" placeholder="******"/>
                        </div>
                        <div className="mb-3 hstack mx-5">
                            <label className="form-check-label cronnos-font-12 fw-semibold">Lembrar usuário</label>
                            <div className="form-check form-switch ms-auto">
                                <input className="form-check-input cronnos-font-12" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </div>
                        <div className="">
                            <Link to="/home" className="btn btn-primary btn-sm w-100">Conectar</Link>
                        </div>
                        <div className="cronnos-font-11 text-center">
                            <div className="mt-2 fw-semibold">
                                <span>Esqueceu seus dados ou ainda não possui cadastro?</span> <Link to="/cadastro">Click aqui</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
    
};

export default Login
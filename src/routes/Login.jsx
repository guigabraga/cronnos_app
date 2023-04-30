import React from "react";
import "../style/Login.css";
import cronnosLogo from "../assets/cronnos-logo.svg";

const Login = () => {

    return(

        <div className="componentLogin">
            <div>
                <img src={cronnosLogo} alt="" width="200px" />
            </div>
            <div className="mt-1 px-5">
                <span className="fw-semibold cronnos-font-15">Bem vindo(a) a sua plataforma de gestão logística</span>
            </div>
            <div className="text-start mt-4">
                <form>
                    <div className="mb-1">
                        <label className="form-label cronnos-font-12 fw-semibold">Email</label>
                        <input type="email" className="form-control form-control-sm border-primary" placeholder="cronnos@email.com"/>
                        <div className="cronnos-font-11 text-muted mt-2">Informe seu email de cadastro</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label cronnos-font-12 fw-semibold">Senha</label>
                        <input type="password" className="form-control form-control-sm border-primary" placeholder="******"/>
                    </div>
                    <div className="mb-3 hstack mx-5">
                        <label className="form-check-label cronnos-font-12" for="flexSwitchCheckDefault">Lembrar usuário</label>
                        <div className="form-check form-switch ms-auto">
                            <input className="form-check-input cronnos-font-12" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-primary btn-sm w-100">Conectar</button>
                    </div>
                    <div className="cronnos-font-11 text-center">
                        <div className="mt-2 fw-semibold">
                            <span>Esqueceu seus dados ou ainda não possui cadastro?</span> <a href="">Click aqui</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
    
};

export default Login
import React from "react";
import "../style/Login.css"
import cronnosLogo from "../assets/cronnos-logo.svg"

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
                    <div class="mb-1">
                        <label class="form-label cronnos-font-12 fw-semibold">Email</label>
                        <input type="email" class="form-control form-control-sm border-primary" placeholder="cronnos@email.com"/>
                        <div class="cronnos-font-11 text-muted mt-2">Informe seu e-mail de cadastro</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label cronnos-font-12 fw-semibold">Senha</label>
                        <input type="password" class="form-control form-control-sm border-primary" />
                    </div>
                    <div className="mb-3 hstack">
                        <label class="form-check-label cronnos-font-12" for="flexSwitchCheckDefault">Lembrar usuário</label>
                        <div class="form-check form-switch ms-auto">
                            <input class="form-check-input cronnos-font-12" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm w-100">Conectar</button>
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
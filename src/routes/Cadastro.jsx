import React from "react";
import "../style/Cadastro.css";
import cronnosLogo from "../assets/cronnos-logo.svg";

const Cadastro = () => {

    return(

        <div className="componentCadastro">
            <div className="row align-items-center text-center">
                <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12 shadow-sm rounded bg-light">
                    <div className="p-4">
                        <img src={cronnosLogo} alt="" width="70%" />
                        <div className="mt-4">
                            <span className="fw-semibold cronnos-font-12">Preencha os campos indicados para realizar seu cadastro em nossa plataforma</span>
                        </div>
                        <div className="mt-5">
                            <span className="cronnos-font-10">v1.0.0-alpha</span>
                        </div>
                    </div>
                </div>
                <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="text-start p-4">
                        <form>
                            <div className="mb-4">
                                <label className="form-label cronnos-font-12 fw-semibold">Email</label>
                                <input type="email" className="form-control form-control-sm border-primary" placeholder="cronnos@email.com"/>
                                <div className="cronnos-font-11 text-muted mt-2">Informe um email para cadastro</div>
                            </div>
                            <div className="mb-1">
                                <label className="form-label cronnos-font-12 fw-semibold">Senha</label>
                                <input type="password" className="form-control form-control-sm border-primary" />
                                <div className="cronnos-font-11 text-muted mt-2">Sua senha deve conter ao menos 6 caracteres</div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label cronnos-font-12 fw-semibold">Confirmar senha</label>
                                <input type="password" className="form-control form-control-sm border-primary" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm w-100">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Cadastro
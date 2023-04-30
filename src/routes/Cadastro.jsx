import React from "react";
import { Link } from "react-router-dom";
import "../style/Cadastro.css";
import cronnosLogo from "../assets/cronnos-logo.svg";

const Cadastro = () => {

    return(

        <div className="componentCadastro">
            <div className="row text-center">
                <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12 shadow-sm rounded bg-light p-5">
                    <div className="mt-5">
                        <img src={cronnosLogo} alt="" width="100%" />
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
                                <label className="form-label cronnos-font-12 fw-semibold">Tipo</label>
                                <select class="form-select form-select-sm border-primary" aria-label="Default select example">
                                    <option value="1">Física</option>
                                    <option value="2">Jurídica</option>
                                </select>
                                <div className="cronnos-font-11 text-muted mt-2">Selecione o tipo de pessoa Física ou Jurídica</div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label cronnos-font-12 fw-semibold">Nome</label>
                                <input type="text" className="form-control form-control-sm border-primary" placeholder="João Silva ou Logistica LTDA"/>
                                <div className="cronnos-font-11 text-muted mt-2">Seu nome ou de sua organização</div>
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
                            <div className="cronnos-font-11 text-center">
                                <div className="mt-2 fw-semibold">
                                    <span>Já possui cadastro e esqueceu seus dados?</span> <Link to="/cadastro">Click aqui</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Cadastro
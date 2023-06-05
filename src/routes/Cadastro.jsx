import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import "../style/Cadastro.css"
import cronnosLogo from "../assets/cronnos-logo.svg"

import LoadSpinner from '../components/LoadSpinner'

const validateNewUserData = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Digite um e-mail válido!"),
    name: yup.string().required("Campo obrigatório!"),
    pass: yup.string().required("Campo obrigatório!").min(6, "Sua senha deve conter ao menos 6 caracteres!"),
    passConfirm: yup.string().required("Campo obrigatório!").oneOf([yup.ref('pass')], "Senhas não são iguais!")
})

function UserExists(){
    return(
        <div className="cronnos-font-11 fw-semibold text-danger mt-2">Email já cadastrado!</div>
    )
}

function Cadastro() {

    localStorage.removeItem("status")

    const navigate = useNavigate()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validateNewUserData)
    })

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(false)
    const [removeUserExists, setRemoveUserExists] = useState(false)

    function newUserData(data){
        Axios.post('http://31.220.31.209:5001/new-user', data)
        .then(function (response) {
            navigate("/")
            localStorage.setItem("status","Usuário cirado com sucesso! Faça seu login.")
        })
        .catch(function (error) {
            // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
            console.log(error)
        })
    }

    function selectUser(data){
        setRemoveLoadSpinner(true)
        Axios.post('http://31.220.31.209:5001/select-user', data)
        .then(function (response) {
            if(response.data.message > 0){
                setTimeout(() => {
                    setRemoveLoadSpinner(false)
                    setRemoveUserExists(true) 
                }, 1000)
            }else{
                newUserData(data)
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    return(

        <div className="componentBody">
            <div className="componentCadastro">
                <div className="row text-center align-items-center">
                    <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
                        <div className="py-5">
                            <img src={cronnosLogo} alt="" width="100%" />
                            <div className="mt-4">
                                <span className="fw-semibold cronnos-font-12">Preencha os campos indicados para realizar seu cadastro em nossa plataforma.</span>
                            </div>
                            <div className="mt-3">
                                <span className="cronnos-font-10 fw-semibold text-muted">v1.0.0-alpha</span>
                            </div>
                        </div>
                    </div>
                    <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12">
                        {
                            removeLoadSpinner ? (<LoadSpinner/>):
                        
                            <div className="text-start p-4">
                                <form onSubmit={handleSubmit(selectUser)}>
                                    <div className="mb-1">
                                        <div className="hstack">
                                            <span className="form-label cronnos-font-12 fw-semibold">Email</span>
                                            <span className="cronnos-font-10 fw-medium text-danger ms-auto">{errors.email?.message}</span>
                                        </div>
                                        <input type="text" name="email" {...register("email")} className="form-control form-control-sm border-primary" placeholder="cronnos@email.com"/>
                                        {
                                            removeUserExists ? (<UserExists/>):
                                            <div className="cronnos-font-11 text-muted mt-2">Informe um email para cadastro</div>
                                        }
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label cronnos-font-12 fw-semibold">Tipo</label>
                                        <select className="form-select form-select-sm border-primary" aria-label="Default select example" name="userType" {...register("userType")}>
                                            <option value="1">Física</option>
                                            <option value="2">Jurídica</option>
                                        </select>
                                        <div className="cronnos-font-11 text-muted mt-2">Selecione o tipo de pessoa Física ou Jurídica</div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="hstack">
                                            <span className="form-label cronnos-font-12 fw-semibold">Nome</span>
                                            <span className="cronnos-font-10 fw-medium text-danger ms-auto">{errors.name?.message}</span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm border-primary" name="name" {...register("name")} placeholder="João Silva ou Logistica LTDA"/>
                                        <div className="cronnos-font-11 text-muted mt-2">Seu nome ou de sua organização</div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="hstack">
                                            <span className="form-label cronnos-font-12 fw-semibold">Senha</span>
                                            <span className="cronnos-font-10 fw-medium text-danger ms-auto">{errors.pass?.message}</span>
                                        </div>
                                        <input type="password" className="form-control form-control-sm border-primary" name="pass" {...register("pass")}/>
                                        <div className="cronnos-font-11 text-muted mt-2">Sua senha deve conter ao menos 6 caracteres</div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="hstack">
                                            <span className="form-label cronnos-font-12 fw-semibold">Confirmar senha</span>
                                            <span className="cronnos-font-10 fw-medium text-danger ms-auto">{errors.passConfirm?.message}</span>
                                        </div>
                                        <input type="password" className="form-control form-control-sm border-primary" name="passConfirm" {...register("passConfirm")}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm w-100">Cadastrar</button>
                                    <div className="cronnos-font-11 text-center">
                                        <div className="mt-2 fw-semibold">
                                            <span>Já possui cadastro e esqueceu seus dados?</span> <Link to="/recuperar-senha">Click aqui</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        }    
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Cadastro;
import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import "../style/Recuperar-senha.css"

import cronnosLogo from "../assets/cronnos-logo.svg"
import LoadSpinner from '../components/LoadSpinner'

const validateUpdatePass = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Digite um e-mail válido!"),
    pass: yup.string().required("Campo obrigatório!").min(6, "Sua senha deve conter ao menos 6 caracteres!"),
    passConfirm: yup.string().required("Campo obrigatório!").oneOf([yup.ref('pass')], "Senhas não são iguais!")
})

function UserExists(){
    return(
        <div className="cronnos-font-11 fw-semibold text-danger mt-2">Email não cadastrado!</div>
    )
}

function RecuperarSenha(){

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validateUpdatePass)
    })

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(false)
    const [removeUserExists, setRemoveUserExists] = useState(false)

    function selecDataUser(data){
        setRemoveLoadSpinner(true)
        const emailUser = {"email": data.email}
        Axios.post('http://31.220.31.209:5001/select-data-user', emailUser)
        .then(function (response) {
            if(response.data.status === "success"){
                const updatePassData = {"email": response.data.data.email, "pass": data.pass, "hashUser": response.data.data.hashUser}
                updatePass(updatePassData)
            }else{
                setTimeout(() => {
                    setRemoveLoadSpinner(false)
                    setRemoveUserExists(true) 
                }, 1000)
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    function updatePass(data){
        Axios.post('http://31.220.31.209:5001/update-pass', data)
        .then(function (response) {
            navigate("/")
            sessionStorage.setItem("status","Senha atualizada com sucesso! Faça o login.")
        })
        .catch(function (error) {
            // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
            console.log(error)
        })
    }

    return(
        <div className="componentBody">
            <div className="componentRecuperarSenha">
                <div className="row text-center align-items-center">
                    <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="text-start p-4">
                            {
                                removeLoadSpinner ? (<LoadSpinner/>):

                                <form onSubmit={handleSubmit(selecDataUser)}>
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
                                    <button type="submit" className="btn btn-primary btn-sm w-100">Atualizar</button>
                                </form>
                            }
                        </div>
                    </div>
                    <div className="co-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
                        <div className="mt-5">
                            <img src={cronnosLogo} alt="" width="100%" />
                            <div className="mt-4">
                                <span className="fw-semibold cronnos-font-12">Preencha os campos indicados para recuperar sua senha.</span>
                            </div>
                            <div className="mt-3">
                                <span className="cronnos-font-10 text-muted fw-semibold">v1.0.0-alpha</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecuperarSenha
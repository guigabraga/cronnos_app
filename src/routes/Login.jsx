import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import '../style/Login.css'

import cronnosLogo from '../assets/cronnos-logo.svg'
import LoadSpinner from '../components/LoadSpinner'

//Validação yup:
const validadeLogin = yup.object().shape({
    email: yup.string().required('Campo obrigatório!').email('Digite um e-mail válido!'),
    pass: yup.string().required('Campo obrigatório!'),
})

function Login(){
    //Pegar mensagem do status no sessionStorage:
    const AlertLogin = sessionStorage.getItem('status')
    //Funão do useNavigate
    const navigate = useNavigate()
    //Parametros do formulário:
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validadeLogin)
    })
    //useState para mudança do componente de Loading:
    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(false)
    //Função de autenticação do usuário:
    function AuthUser(data){
        //Ativação do componente de Loading:
        setRemoveLoadSpinner(true)
        //Remoção da mensagem no sessionStorage:
        sessionStorage.removeItem('status')
        //Requisição Axios
        Axios.post('http://31.220.31.209:5001/auth-user', data)
        .then(function (response) {
            if(response.data.status === 'success'){
                sessionStorage.removeItem('status')
                sessionStorage.setItem('userAuth', response.data.auth)
                sessionStorage.setItem('userToken', response.data.token)
                sessionStorage.setItem('userName', response.data.nameUser)
                setTimeout(() => {
                    setRemoveLoadSpinner(false)
                    navigate('/Home')
                }, 1000)
            }else{
                sessionStorage.setItem('status','Email ou senha incorretos!')
                setTimeout(() => {
                    setRemoveLoadSpinner(false)
                }, 1000)
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    //Renderização principal:
    return(
        <div className='componentBody'>
            <div className='componentLogin'>
                <div>
                    <img src={cronnosLogo} alt='' width='200px' />
                </div>
                <div className='mt-3'>
                    <span className='fw-semibold cronnos-font-15'>Bem vindo(a) a sua plataforma de gestão logística</span>
                </div>
                <div className='text-center mt-3'>
                    <span className='cronnos-font-11 fw-semibold text-secondary'>{AlertLogin}</span>
                </div>
                <div className='text-start mt-3 mx-3'>
                    {
                        removeLoadSpinner ? (<LoadSpinner/>):
                        <form onSubmit={handleSubmit(AuthUser)}>
                            <div className='mb-1'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Email</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.email?.message}</span>
                                </div>
                                <input type='text' name='email' {...register('email')} className='form-control form-control-sm border-primary' placeholder='cronnos@email.com'/>
                                <div className='cronnos-font-11 text-muted mt-2'>Informe seu email cadastrado</div>
                            </div>
                            <div className='mb-3'>
                                <div className='hstack'>
                                    <span className='form-label cronnos-font-12 fw-semibold'>Senha</span>
                                    <span className='cronnos-font-10 fw-medium text-danger ms-auto'>{errors.pass?.message}</span>
                                </div>
                                <input type='password' className='form-control form-control-sm border-primary' name='pass' placeholder='******' {...register('pass')}/>
                            </div>
                            <div className='mb-3 hstack mx-5'>
                                <label className='form-check-label cronnos-font-12 fw-semibold'>Lembrar usuário</label>
                                <div className='form-check form-switch ms-auto'>
                                    <input className='form-check-input cronnos-font-12' type='checkbox' role='switch' id='flexSwitchCheckDefault'/>
                                </div>
                            </div>
                            <div className=''>
                                <button type='submit' className='btn btn-primary btn-sm w-100'>Conectar</button>
                            </div>
                            <div className='cronnos-font-11 text-center'>
                                <div className='mt-2 fw-semibold'>
                                    <span>Esqueceu seus dados ou ainda não possui cadastro?</span> <Link to='/cadastro'>Click aqui</Link>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )   
}

export default Login
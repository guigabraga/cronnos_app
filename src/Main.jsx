import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global-style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Login from './routes/Login.jsx';
import Cadastro from './routes/Cadastro.jsx';
import RecuperarSenha from './routes/Recuperar-senha.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "cadastro",
        element: <Cadastro /> 
    },
    {
        path: "recuperar-senha",
        element: <RecuperarSenha /> 
    },
    {
        path: "dahsboard",
        element: <Dashboard /> 
    },
    {
        path: "home",
        element: <Home /> 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

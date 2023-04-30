import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./global-style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Login from './routes/Login.jsx';
import Cadastro from './routes/Cadastro.jsx';

const router = createBrowserRouter([
    {
        path: "login",
        element: <Login />
    },
    {
        path: "cadastro",
        element: <Cadastro /> 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

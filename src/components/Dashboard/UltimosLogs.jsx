import React, { useState, useEffect} from 'react'
import Axios from 'axios'

import LoadSpinner from '../LoadSpinner'

function UltimosLogs(){

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(true)
    const [renderTable, setRenderTable] = useState([])

    useEffect(() => {

        setInterval(() => {

            Axios.get('http://31.220.31.209:5001/select-logs', {

                timeout: 10000

            })

            .then(function (response) {

                const dataSelectLogs = [response.data.data.data]
                setRenderTable(dataSelectLogs[0])
                setRemoveLoadSpinner(false)

            })

            .catch(function (error) {

                console.log(error)
                setRemoveLoadSpinner(false)

            })

        }, 1000)

    }, [])
    
    return(
        <div className='shadow-sm rounded border p-3 m-1'>
            <span className='fw-semibold cronnos-font-14'>Últimos Logs de sistema</span>
            {
                removeLoadSpinner ? (<LoadSpinner/>) : 
                <div className='table-responsive'>
                    <table className="table table-striped cronnos-font-12 mt-3">
                        <thead>
                            <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className='cronnos-font-10'>
                        { 
                            renderTable.map( (item, index) =>(
                                <tr key={index}>
                                    <td>{item.date_insert.toLocaleString('pt-BR')}</td>
                                    <td>{item.name}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default UltimosLogs
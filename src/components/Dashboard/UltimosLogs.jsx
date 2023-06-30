import React, { useState, useEffect} from 'react'
import Axios from 'axios'

import LoadSpinner from '../LoadSpinner'

function UltimosLogs(){

    const [removeLoadSpinner, setRemoveLoadSpinner] = useState(true)
    const [renderTable, setRenderTable] = useState([])

    useEffect(() => {

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

    }, [])

    // Função para definir o tempo máximo e mínimo do gráfico
    function formatarData(data) {

        var ano = data.getFullYear();
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);
        var dia = ("0" + data.getDate()).slice(-2);
        var hour = ("0" + data.getHours()).slice(-2);
        var minute = ("0" + data.getMinutes()).slice(-2);
        var seconds = ("0" + data.getSeconds()).slice(-2);

        var dataFormatada = dia + "/" + mes + "/" + ano + " " + hour + ":" + minute + ":" + seconds;
        return dataFormatada;

    }
    
    return(
        <div className='p-3 m-1'>
            <span className='fw-semibold cronnos-font-14'>Últimos Logs de sistema</span>
            {
                removeLoadSpinner ? (<LoadSpinner/>) : 
                <div className='table-responsive'>
                    <table className="table table-striped cronnos-font-12 mt-3">
                        <thead>
                            <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className='cronnos-font-10'>
                        { 
                            renderTable.map( (item, index) => {
                                const dataFormatada = formatarData(new Date(item.date_insert))
                                return(
                                    <tr key={index}>
                                        <td>{dataFormatada}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default UltimosLogs
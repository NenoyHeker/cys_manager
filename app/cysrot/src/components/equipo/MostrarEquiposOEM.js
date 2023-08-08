import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from '../../Global';
import {EquipoIndividual} from "./EquipoIndOEM";

export const MostrarEquiposOEM = () => {
    const [dataEquipo, setDataEquipo] = useState([]);
    const url = Global.url;

    useEffect(()=>{
        searchEquipos();
    },[]);

    function searchEquipos(){
        axios.get(url + 'getalloem')
        .then((res) => {
            console.log(res);
            setDataEquipo(res.data);
        })
        .catch((e)=>{
            console.log(e);
        });
    }
// "<ClienteIndividual cliente = {}>" renderiza el componene ClienteInd y se le manda como parametro cliente 
    const listarEquiposOEM = dataEquipo.map((equipo, id) =>{
        return(
            <div key={id}>   
                <EquipoIndividual equipo = {equipo}/>
            </div>
        );
    });
    return (
        <div className="container-fluid">
            <div className='container mt-5 mb-5 '>
                <div className="row">
                    <div className='col-md'>Modelo</div>
                    <div className='col-md'>Marca</div>
                    <div className='col-md'>Número Serial</div>
                    <div className='col-md'>Dueño</div>
                    <div className='col-md'>Problema</div>
                    <div className='col-md'>Fecha de registro</div>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
            </div>
            <div className='container mt-5'>
                {listarEquiposOEM}
            </div>            
           
            
        </div>
    );
}


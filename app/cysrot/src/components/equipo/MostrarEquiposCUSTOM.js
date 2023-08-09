import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from '../../Global';
import {EquipoIndividual} from "./EquipoIndCUSTOM";

export const MostrarEquiposCUSTOM = () => {
    const [dataEquipo, setDataEquipo] = useState([]);
    const url = Global.url;

    useEffect(()=>{
        searchEquipos();
    },[]);

    function searchEquipos(){
        axios.get(url + 'getallcustom')
        .then((res) => {
            console.log(res);
            setDataEquipo(res.data);
        })
        .catch((e)=>{
            console.log(e);
        });
    }
// "<ClienteIndividual cliente = {}>" renderiza el componene ClienteInd y se le manda como parametro cliente 
    const listarEquiposCUSTOM = dataEquipo.map((equipo, id) =>{
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
                    <div className='col-md'>Procesador</div>
                    <div className='col-md'>Memoria RAM</div>
                    <div className='col-md'>Almacenamiento</div>
                    <div className='col-md'>Dueño</div>
                    <div className='col-md'>Problema</div>
                    <div className='col-md'>Fecha de registro</div>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
            </div>
            <div className='container mt-5'>
                {listarEquiposCUSTOM}
            </div>            
           
            
        </div>
    );
}


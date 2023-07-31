import React, {useState, useEffect} from 'react';
import axios, {Axios} from 'axios';
import Global from '../Global';
import {ClienteIndividual} from "./Article";

export const MostrarClientes = () => {
    const [dataClientes, setDataClientes] = useState([]);
    const url = Global.url;

    useEffect(()=>{
        axios.get(url + 'getClientes')
        .then((res) => {
            console.log(res);
            setDataClientes(res.data);
        })
        .catch((e)=>{
            console.log(e);
        });
    },[]);


    const listarClientes = dataClientes.map((cliente, id) =>{
        return(
            <div key={id}>
                <ClienteIndividual cliente = {cliente}/>
                {cliente.name}
                {cliente.lastname}
                {cliente.phone}
                {cliente.date}
            </div>
        );
    });
    return (
        <div className="container-fluid">
            <div className='container mt-5 mb-5 '>
                <div className="row">
                    <div className='col-md'>Nombre</div>
                    <div className='col-md'>Apellido</div>
                    <div className='col-md'>Telefono</div>
                    <div className='col-md'>Fecha de registro</div>
                    <div className='col-md'></div>
                </div>
            </div>
            <div className='container mt-5'>
                {listarClientes}
            </div>            
           
            
        </div>
    );
}


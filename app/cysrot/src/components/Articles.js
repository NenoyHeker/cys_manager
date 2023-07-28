import React, {useState, useEffect} from 'react';
import axios, {Axios} from 'axios';
import Global from '../Global';
import ClienteIndividual from "./Article";

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
            console.log(res);
        });
    },[]);


    const listarClientes = dataClientes.map((cliente, id) =>{
        return(
            <div key={id}>
                <ClienteIndividual cliente = {cliente}/>
                {usuario.name}
                {usuario.lastname}
                {usuario.phone}
                {usuario.date}
            </div>
        );
    });
    return (
        <div>
            Mostrar los clientes
        </div>
    );
}


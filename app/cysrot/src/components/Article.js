import React from "react";
import {Link} from "react-router-dom";

export const ClienteIndividual = (id, clienteData, delCliente) => {
    // el contenido del model cliente se pasa a clienteData para que lo muestre en Articles
    const {name, lastname, phone, date} = clienteData;
    const formatDate = (date) =>{
        return date.substring(8, 10) + date.substring(4, 8) + date.substring(0,4);
    }

    const del = () =>{
        delCliente(id);
    }


    return(
        <div className="col">
            <div className="card mx-auto mb-3">
                <div className="card-header">
                    <h3 className="card-title">
                        {name}
                    </h3>
                </div>
                <div className="card-body">
                    <label className="card-text text-start">
                        {lastname}
                    </label>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-pub list-group-item">
                        {phone}                     
                    </li>
                    <li className="list-pub list-group-item">
                        Publicado el: {formatDate(date)}
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger btn-sm" type="button" onClick={del}>
                    Eliminar
                </button>
            </div>
        </div>

    );
}

import React from "react";
import {Link} from "react-router-dom";

export const ClienteIndividual = (name, lastname, phone, date) => {
    // el contenido del model cliente se pasa a clienteData para que lo muestre en Articles

    return(
        <>
            <div className="row">
                    <div className="col-md">
                        <div className="label ml-5">
                            nombre
                            {name}
                        </div>
                        
                    </div>
                    <div className="col-md">
                        
                            {lastname}
                        
                    </div>
                    <div className="col-md">
                        <h3 className="card-text text-start">
                            {phone} 
                        </h3>
                    </div>
                    <div className="col-md">
                        <h3 className="card-title">
                            {date}
                        </h3>
                    </div>
                    <div className="col-md">
                        <button className="btn btn-danger btn-sm" type="button" onClick={del}>
                            Editar
                        </button>
                    </div>
                    <div className="col-md">
                        <button className="btn btn-danger btn-sm" type="button" onClick={del}>
                            Eliminar
                        </button>
                    </div>
                </div>
        </>    
    );
};

import React from "react";
import {Link} from "react-router-dom";

export const ClienteIndividual = ({cliente}) => {
    var linkEditar = "/editarcliente/" + cliente._id;
    var linkBorrar = "/BorrarCliente/" + cliente._id;
    
    return(
        <>
            <div className="row mt-3">
                    <div className="col-md">
                        <div className="label">
                            {cliente.name}
                        </div>
                        
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {cliente.lastname}
                        </div>
                            
                        
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {cliente.phone} 
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {cliente.date}
                        </div>
                    </div>
                    <div className="col">
                        <Link to={linkEditar}>Editar</Link>/<Link to={linkBorrar}>Borrar</Link>
                    </div>
                </div>
        </>    
    );
};

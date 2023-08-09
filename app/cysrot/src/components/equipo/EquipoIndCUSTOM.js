import React from "react";
import {Link} from "react-router-dom";

export const EquipoIndividual = ({equipo}) => {
    var linkEditar = "/editarcustom/" + equipo._id;
    var linkBorrar = "/eliminarcustom/" + equipo._id;
    
    return(
        <>
            <div className="row mt-3">
                    <div className="col-md">
                        <div className="label">
                            {equipo.cpu}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.ram}
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.storage} 
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.owner}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.problem}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.date}
                        </div>
                    </div>
                    <div className="col">
                        <Link to={linkEditar}>Editar</Link>/<Link to={linkBorrar}>Borrar</Link>
                    </div>
                </div>
        </>    
    );
};

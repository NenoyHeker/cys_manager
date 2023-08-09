import React from "react";
import {Link} from "react-router-dom";

export const EquipoIndividual = ({equipo}) => {
    var linkEditar = "/editarmulti/" + equipo._id;
    var linkBorrar = "/eliminarmulti/" + equipo._id;
    
    return(
        <>
            <div className="row mt-3">
                    <div className="col-md">
                        <div className="label">
                            {equipo.model}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.brand}
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.serial} 
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="label">
                            {equipo.counter} 
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

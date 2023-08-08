import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Global from '../../Global';


export const NuevoEquipoOEM = () =>{

    const url = Global.url;
    const navigate = useNavigate();

    const [equipoReg, setEquipo] = useState({
        modelref: null,
        brandref: null,
        serialref: null,
        ownerref: null,
        problemref: null,
        dateref: null,
    })

    //state que redirecciona a la pagina de inicio una vez se acaba el registro
    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario

    let modelref = React.createRef();
    let brandref = React.createRef();
    let serialref = React.createRef();
    let ownerref = React.createRef();
    let problemref = React.createRef();
    let dateref = React.createRef();

    const changeState = () =>{
        setEquipo({
            model: modelref.current.value,
            brand: brandref.current.value,
            serial: serialref.current.value,
            owner: ownerref.current.value,
            problem: problemref.current.value,
            date: dateref.current.value
        });

        console.log(equipoReg);

    }

    const sendData = (e) =>{
        //Evita la recarga de la pantalla
        e.preventDefault();
        changeState();
        //Peticion HTTP
        axios.post(url + 'newoem',equipoReg)
        .then(res => {
            //redirect se establece como true en caso de que si se haya guardado el nuevo cliente
            setRedirect(true);
            console.log(res.data)
        })
    }
    // se evalua si redirect es verdadero para redireccionar al componente articles
    if(redirect){
        //articles esta declarado en Header.js
        return navigate("/mostraroem");
    }


    return(
        <div className="nuevo-oem">
           <div id="formulario" className="card mx-auto mb-3 mt-5" style={{width: '30em'}}>
                <div className="card-header text-dark">

                    <h4>
                        Nuevo Equipo OEM
                    </h4>
                </div>
                <div className="card-body">
                    
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label>Modelo</label>
                            <input type="text" className="form-control" id="model" name="model" ref ={modelref} onChange={changeState} required></input>                         
                        </div>

                        <div className="mb-3">
                            <label>Marca</label>
                            <input type="text" className="form-control" id="brand" name="brand" ref ={brandref} onChange={changeState} required></input>
                        </div>

                        <div className="mb-3">
                            <label>Número Serial</label>
                            <input type="number" className="form-control" id="serial" name="serial" ref ={serialref} onChange={changeState} required></input>
                        </div>
                        
                        <div className="mb-3">
                            <label>Dueño</label>
                            <input type="text" className="form-control" id="owner" name="owner" ref ={ownerref} onChange={changeState} required></input>
                        </div>

                        <div className="mb-3">
                            <label>Diagnostico inicial</label>
                            <textarea cols={50} rows={6} className="form-control" id="problem" name="problem" ref ={problemref} onChange={changeState} required></textarea>
                        </div>

                        <div className="mb-3">
                            <label>Fecha de registro</label>
                            <input type="date" className="form-control" id="date" name="date" ref ={dateref} onChange={changeState} required></input>
                            
                        </div>

                        <div className="mb-3">
                            
                            <input type="submit" className="form-control btn btn-primary" id="publish" value="Registrar" required></input>
                            
                        </div>

                    </form>
                </div>
           </div>
        </div>
    );
}
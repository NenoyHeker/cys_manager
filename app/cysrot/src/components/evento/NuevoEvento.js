import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Global from '../../Global';


export const NuevoEvento = () =>{

    const url = Global.url;
    const navigate = useNavigate();

    //para cambiar de estado
    const [eventoReg, setEvento] = useState({
        device: null,
        owner: null,
        piece: null,
        content: null
    })

    //state que redirecciona a la pagina de inicio una vez se acaba el registro
    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario

    let deviceref = React.createRef();
    let ownerref = React.createRef();
    let pieceref = React.createRef();
    let contentref = React.createRef();

    const changeState = () =>{
        setEvento({
            device: deviceref.current.value,
            owner: ownerref.current.value,
            piece: phoneref.current.value,
            date: dateref.current.value
        });

        console.log(clienteReg);

    }

    const sendData = (e) =>{
        //Evita la recarga de la pantalla
        e.preventDefault();
        changeState();
        //Peticion HTTP
        axios.post(url + 'newCliente',clienteReg)
        .then(res => {
            //redirect se establece como true en caso de que si se haya guardado el nuevo cliente
            setRedirect(true);
            console.log(res.data)
        })
    }
    // se evalua si redirect es verdadero para redireccionar al componente articles
    if(redirect){
        //articles esta declarado en Header.js
        return navigate("/mostrarclientes");
    }


    return(
        <div className="nuevo-cliente">
           <div id="formulario" className="card mx-auto mb-3 mt-5" style={{width: '30em'}}>
                <div className="card-header text-dark">

                    <h4>
                        Nuevo Cliente
                    </h4>
                </div>
                <div className="card-body">
                    
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" id="name" name="name" ref ={nameref} onChange={changeState} required></input>
                            
                        </div>

                        <div className="mb-3">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" id="lastname" name="lastname" ref ={lastnameref} onChange={changeState} required></input>
                            
                        </div>

                        <div className="mb-3">
                            <label>Numero de telefono</label>
                            <input type="text" className="form-control" id="phone" name="phone" ref ={phoneref} onChange={changeState} required></input>
                            
                        </div>

                        <div className="mb-3">
                            <label>Fecha de registro</label>
                            <input type="date" className="form-control" id="date" name="date" ref ={dateref} onChange={changeState} required></input>
                            
                        </div>

                        <div className="mb-3">
                            
                            <input type="submit" className="form-control btn btn-primary" id="publish" value="Publicar" required></input>
                            
                        </div>

                    </form>
                </div>
           </div>
        </div>
    );
}
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export const EditarCliente = () => {
    const url = Global.url;
    const params = useParams();
    console.log(params.id);

    const id = params.id;
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    function EditarCliente(e) {
        e.preventDefault();
        var cliObj = (
            id, name, lastname, phone, date
        )
        console.log(cliObj);
        axios.put(url + 'updatecliente/', cliObj)
            .then((res) => {
                navigate("/mostrarclientes");
            })
            .catch((e) => {
                console.log('Error: ' + e);
            })
    }

    return (
        <>
            <div className="editar-cliente">
                <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                    <div className="card-header text-dark">

                        <h4>
                            Editar Cliente
                        </h4>
                    </div>
                    <div className="card-body">

                        <form onSubmit={EditarCliente}>
                            <div className="mb-3">
                                <label>Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={name}  onChange={(e) => { setName(e.target.value) }} required></input>

                            </div>

                            <div className="mb-3">
                                <label>Apellidos</label>
                                <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value) }} required></input>

                            </div>

                            <div className="mb-3">
                                <label>Numero de telefono</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required></input>

                            </div>

                            <div className="mb-3">
                                <label>Fecha de registro</label>
                                <input type="date" className="form-control" id="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }} required></input>

                            </div>

                            <div className="mb-3">

                                <input type="submit" className="form-control btn btn-primary" id="update" value="Actualizar" required>Actualizar</input>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )







}




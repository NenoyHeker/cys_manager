import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export const EditarCliente = () => {
    const url = Global.url;
    const params = useParams();
    
    const id = params.id;
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    

    useEffect(()=>{
        searchCliente(id);
    }, []);

    function searchCliente(i){
        
        axios.get(url + 'getcliente/' + i)
        .then((res)=>{
            setName(res.data.name);
            setLastname(res.data.lastname);
            setPhone(res.data.phone);
            setDate(res.data.date);
        })
        .catch((e)=>{
            console.log('Error: ' + e);
        });

    }

    function updCliente(e) {
        e.preventDefault();
        var cliObj = {
            id: id,
            name: name,
            lastname: lastname,
            phone: phone,
            date: date
        }
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

                        <form onSubmit={updCliente}>
                            <div className="mb-3">
                                <label>Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={name}  onChange={(e) => { setName(e.target.value) }} required/>

                            </div>

                            <div className="mb-3">
                                <label>Apellidos</label>
                                <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value) }} required/>

                            </div>

                            <div className="mb-3">
                                <label>Numero de telefono</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required/>

                            </div>

                            <div className="mb-3">
                                <label>Fecha de registro</label>
                                <input type="date" className="form-control" id="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }} required/>

                            </div>

                            <div className="mb-3">

                                <button type="submit" className="form-control btn btn-primary" id="update"  required> Actualizar </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}




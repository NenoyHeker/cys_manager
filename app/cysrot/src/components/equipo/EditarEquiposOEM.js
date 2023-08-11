import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

export const EditarEquipoOEM = () => {
    const url = Global.url;
    const params = useParams();

    const id = params.id;
    const navigate = useNavigate();
    const [dataClientes, setDataClientes] = useState([]);
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [serial, setSerial] = useState('');
    const [owner, setOwner] = useState('');
    const [problem, setProblem] = useState('');

    useEffect(() => {
        searchEquipo(id);
        searchCli();
    }, []);

    const searchCli = () => {
        axios.get(url + 'getclientes')
        .then((res)=>{
            setDataClientes(res.data)
        })
        .catch((e) =>{
            console.log(e);
        });
    }

    function searchEquipo(i) {

        axios.get(url + 'getoem/' + i)
            .then((res) => {
                setModel(res.data.model);
                setBrand(res.data.brand);
                setSerial(res.data.serial);
                setOwner(res.data.owner);
                setProblem(res.data.problem);
            })
            .catch((e) => {
                console.log('Error: ' + e);
            });

    }

    function updEquipo(e) {
        e.preventDefault();
        var eObj = {
            model: model,
            brand: brand,
            serial: serial,
            owner: owner,
            problem: problem,
        }
        console.log(eObj);

        axios.put(url + 'updateoem/' + id, eObj)
            .then((res) => {
                navigate("/mostraroem");
            })
            .catch((e) => {
                console.log('Error: ' + e);
            })
    }

    return (
        <>
            <div className="editar-equipo">
                <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                    <div className="card-header text-dark">
                        <h4>
                            Editar Equipo OEM
                        </h4>
                    </div>
                    <div className="card-body">

                        <form onSubmit={updEquipo}>
                            <div className="mb-3">
                                <label>Modelo</label>
                                <input type="text" className="form-control" id="model" name="model" value={model}  onChange={(e) => { setModel(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <label>Marca</label>
                                <input type="text" className="form-control" id="brand" name="brand" value={brand}  onChange={(e) => { setBrand(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <label>Número Serial</label>
                                <input type="text" className="form-control" id="serial" name="serial" value={serial} onChange={(e) => { setSerial(e.target.value) }} required/>
                            </div>

                         
                            <div className="mb-3">
                                <label>Dueño</label>
                                <select className='form-control' id="owner" name="owner" value={owner} onChange={(e) => { setOwner(e.target.value) }}>
                                    {dataClientes.map(cliente => (
                                        <option key={cliente.id} value={cliente.name}>{cliente.name}</option>
                                    )
                                    )}

                                </select>
                            </div>

                            <div className="mb-3">
                                <label>Diagnostico inicial</label>
                                <textarea cols={50} rows={6} className="form-control" id="problem" name="problem" value={problem} onChange={(e) => { setProblem(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="form-control btn btn-primary" id="update" required> Actualizar </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}




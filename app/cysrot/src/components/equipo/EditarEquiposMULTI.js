import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

export const EditarEquipoMULTI = () => {
    const url = Global.url;
    const params = useParams();

    const id = params.id;
    const navigate = useNavigate();
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [serial, setSerial] = useState('');
    const [counter, setCounter] = useState('');
    const [owner, setOwner] = useState('');
    const [problem, setProblem] = useState('');

    useEffect(() => {
        searchEquipo(id);
    }, []);

    function searchEquipo(i) {

        axios.get(url + 'getmulti/' + i)
            .then((res) => {
                setModel(res.data.model);
                setBrand(res.data.brand);
                setSerial(res.data.serial);
                setCounter(res.data.counter);
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
            counter: counter,
            owner: owner,
            problem: problem,
        }
        console.log(eObj);

        axios.put(url + 'updatemulti/' + id, eObj)
            .then((res) => {
                navigate("/mostrarmulti");
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
                            Editar Equipo Multifuncional
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
                                <label>Contador</label>
                                <input type="number" className="form-control" id="counter" name="counter" value={counter} onChange={(e) => { setCounter(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <label>Dueño</label>
                                <input type="text" className="form-control" id="owner" name="owner" value={owner} onChange={(e) => { setOwner(e.target.value) }} required/>
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




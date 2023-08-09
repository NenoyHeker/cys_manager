import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

export const EditarEquipoCUSTOM = () => {
    const url = Global.url;
    const params = useParams();

    const id = params.id;
    const navigate = useNavigate();
    const [cpu, setCPU] = useState('');
    const [ram, setRAM] = useState('');
    const [storage, setStorage] = useState('');
    const [owner, setOwner] = useState('');
    const [problem, setProblem] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        searchEquipo(id);
    }, []);

    function searchEquipo(i) {

        axios.get(url + 'getcustom/' + i)
            .then((res) => {
                setCPU(res.data.cpu);
                setRAM(res.data.ram);
                setStorage(res.data.storage);
                setOwner(res.data.owner);
                setProblem(res.data.problem);
                setDate(res.data.date);
            })
            .catch((e) => {
                console.log('Error: ' + e);
            });

    }

    function updEquipo(e) {
        e.preventDefault();
        var eObj = {
            cpu: cpu,
            ram: ram,
            storage: storage,
            owner: owner,
            problem: problem,
            date: date
        }
        console.log(eObj);

        axios.put(url + 'updatecustom/' + id, eObj)
            .then((res) => {
                navigate("/mostrarcustom");
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
                            Editar Equipo Custom
                        </h4>
                    </div>
                    <div className="card-body">

                        <form onSubmit={updEquipo}>
                            <div className="mb-3">
                                <label>Procesador</label>
                                <input type="text" className="form-control" id="cpu" name="cpu" value={cpu}  onChange={(e) => { setCPU(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <label>Memoria RAM</label>
                                <input type="text" className="form-control" id="ram" name="ram" value={ram}  onChange={(e) => { setRAM(e.target.value) }} required/>
                            </div>

                            <div className="mb-3">
                                <label>Almacenamiento</label>
                                <input type="text" className="form-control" id="storage" name="storage" value={storage} onChange={(e) => { setStorage(e.target.value) }} required/>
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
                                <label>Fecha de registro</label>
                                <input type="date" className="form-control" id="date" name="date" value={date} onChange={(e) => { setDate(e.target.value) }} required />
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




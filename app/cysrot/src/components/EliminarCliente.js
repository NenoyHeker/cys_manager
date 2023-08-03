import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Global from '../Global';

export const EliminarCliente = () => {
    url = Global.url;
    const params = useParams();
    console.log(params.id);

    const id = params.id;
    const navigate = useNavigate();

    axios.delete(url + 'deleteCliente/' + id)
    .then((res)=>{
        navigate("/mostrarClientes");
    })
    .catch((e)=>{
        console.log('Error');
    });
    return(
        <></>
    );
}
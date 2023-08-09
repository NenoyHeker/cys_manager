import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Modal from "../Modal";
import axios from 'axios';
import Global from '../../Global';



export const EliminarEquipoMULTI = () => {
    const [active, setActive] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const toggle = () => {
        setActive(!active);
    }
    const url = Global.url;
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .delete(url + 'deletemulti/' + id)
            .then((res) => {
                setIsSuccess(false);
            })
            .catch((e) => {
                console.log('Error');
            });
    }, [id, url]);

    return (
        <div>
            {!active ? (
                navigate("/mostrarmulti")
            ) : (
            <Modal active={active} toggle = {toggle}>
                {isSuccess ? (
                    <h2>Error al borrar</h2>
                ):(
                    <h2>Equipo borrado</h2>
                )}
            </Modal>
        )}
        </div>
    );

};
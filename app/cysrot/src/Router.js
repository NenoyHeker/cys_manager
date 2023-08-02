import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import {Mainmenu} from "./components/mainmenu";
import {NuevoCliente} from "./components/NuevoCliente";
import {MostrarClientes} from "./components/MostrarClientes";
import { EditarCliente } from "./components/EditarClientes";

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            
            <Routes>
                <Route exact path='/' element = {<Mainmenu/>}/>
                <Route exact path='/nuevocliente' element = {<NuevoCliente/>}/>
                <Route exact path='/mostrarclientes' element= {<MostrarClientes/>}/>
                <Route exact path='/editarcliente/:id' element= {<EditarCliente/>}/>
            </Routes>
            
        </BrowserRouter>
    );

}

export default Router;
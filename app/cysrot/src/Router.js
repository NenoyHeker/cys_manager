import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { Mainmenu } from "./components/mainmenu";
//CLIENTES
import { NuevoCliente } from "./components/cliente/NuevoCliente";
import { MostrarClientes } from "./components/cliente/MostrarClientes";
import { EditarCliente } from "./components/cliente/EditarClientes";
import { EliminarCliente } from "./components/cliente/EliminarCliente";
//EQUIPOS OEM
import { NuevoEquipoOEM } from "./components/equipo/NuevoEquipoOEM";
import { MostrarEquiposOEM } from "./components/equipo/MostrarEquiposOEM";

//EQUIPOS CUSTOM

//EQUIPOS MULTI

//EVENTOS

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            
            <Routes>
                <Route exact path='/' element = {<Mainmenu/>}/>
                <Route exact path='/nuevocliente' element = {<NuevoCliente/>}/>
                <Route exact path='/mostrarclientes' element= {<MostrarClientes/>}/>
                <Route exact path='/editarcliente/:id' element= {<EditarCliente/>}/>
                <Route exact path='/eliminarcliente/:id' element= {<EliminarCliente/>}/>
                <Route exact path='/nuevooem' element = {<NuevoEquipoOEM/>}/>
                <Route exact path='/mostraroem' element = {<MostrarEquiposOEM/>}/>

            </Routes>
            
        </BrowserRouter>
    );

}

export default Router;

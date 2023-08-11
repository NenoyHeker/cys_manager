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
import { EditarEquipoOEM } from "./components/equipo/EditarEquiposOEM";
import { EliminarEquipoOEM } from "./components/equipo/EliminarEquiposOEM";
//EQUIPOS CUSTOM
import { NuevoEquipoCUSTOM } from "./components/equipo/NuevoEquipoCUSTOM";
import { MostrarEquiposCUSTOM } from "./components/equipo/MostrarEquiposCUSTOM";
import { EditarEquipoCUSTOM } from "./components/equipo/EditarEquiposCUSTOM";
import { EliminarEquipoCUSTOM } from "./components/equipo/EliminarEquiposCUSTOM";
//EQUIPOS MULTI
import { NuevoEquipoMULTI } from "./components/equipo/NuevoEquipoMULTI";
import { MostrarEquiposMULTI } from "./components/equipo/MostrarEquiposMULTI";
import { EditarEquipoMULTI } from "./components/equipo/EditarEquiposMULTI";
import { EliminarEquipoMULTI } from "./components/equipo/EliminarEquiposMULTI";
//EVENTOS
import { NuevoEvento } from "./components/evento/NuevoEvento";
import { MostrarEventos } from "./components/evento/MostrarEventos";
import { EditarEvento } from "./components/evento/EditarEventos";
import { EliminarEvento } from "./components/evento/EliminarEvento";

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
                <Route exact path='/editaroem/:id' element = {<EditarEquipoOEM/>}/>
                <Route exact path='/eliminaroem/:id' element = {<EliminarEquipoOEM/>}/>

                <Route exact path='/nuevocustom' element = {<NuevoEquipoCUSTOM/>}/>
                <Route exact path='/mostrarcustom' element = {<MostrarEquiposCUSTOM/>}/>
                <Route exact path='/editarcustom/:id' element = {<EditarEquipoCUSTOM/>}/>
                <Route exact path='/eliminarcustom/:id' element = {<EliminarEquipoCUSTOM/>}/>

                <Route exact path='/nuevomulti' element = {<NuevoEquipoMULTI/>}/>
                <Route exact path='/mostrarmulti' element = {<MostrarEquiposMULTI/>}/>
                <Route exact path='/editarmulti/:id' element = {<EditarEquipoMULTI/>}/>
                <Route exact path='/eliminarmulti/:id' element = {<EliminarEquipoMULTI/>}/>

                <Route exact path='/nuevoevento' element = {<NuevoEvento/>}/>
                <Route exact path='/mostrareventos' element = {<MostrarEventos/>}/>
                <Route exact path='/editarevento/:id' element = {<EditarEvento/>}/>
                <Route exact path='/eliminarevento/:id' element = {<EliminarEvento/>}/>
            </Routes>
            
            
        </BrowserRouter>
    );

}

export default Router;

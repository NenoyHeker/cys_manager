import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <nav id="navbar" className="navbar navbar-expand-lg">

            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 230 230" fill="none">
                        <path d="M0 50C0 22.3858 22.3858 0 50 0H180C207.614 0 230 22.3858 230 50V180C230 207.614 207.614 230 180 230H50C22.3858 230 0 207.614 0 180V50Z" fill="#AA0000" />
                        <path d="M43 195.5V43.2102C43 37.0742 50.3332 33.9075 54.7997 38.1147L82.1277 63.8565C83.5319 65.1792 84.328 67.0228 84.328 68.9519V195.5C84.328 199.366 81.194 202.5 77.328 202.5H50C46.134 202.5 43 199.366 43 195.5Z" fill="white" />
                        <path d="M177.732 108.049H150.695C148.936 108.049 147.242 107.387 145.95 106.195L73.2296 39.1463C68.5434 34.8256 71.6005 27 77.9746 27H103.927C105.668 27 107.346 27.6484 108.634 28.8188L182.439 95.8679C187.176 100.171 184.132 108.049 177.732 108.049Z" fill="white" />
                        <path d="M43 195.5V43.2102C43 37.0742 50.3332 33.9075 54.7997 38.1147L82.1277 63.8565C83.5319 65.1792 84.328 67.0228 84.328 68.9519V195.5C84.328 199.366 81.194 202.5 77.328 202.5H50C46.134 202.5 43 199.366 43 195.5Z" stroke="white" />
                        <path d="M43 195.5V43.2102C43 37.0742 50.3332 33.9075 54.7997 38.1147L82.1277 63.8565C83.5319 65.1792 84.328 67.0228 84.328 68.9519V195.5C84.328 199.366 81.194 202.5 77.328 202.5H50C46.134 202.5 43 199.366 43 195.5Z" stroke="white" />
                        <path d="M177.732 108.049H150.695C148.936 108.049 147.242 107.387 145.95 106.195L73.2296 39.1463C68.5434 34.8256 71.6005 27 77.9746 27H103.927C105.668 27 107.346 27.6484 108.634 28.8188L182.439 95.8679C187.176 100.171 184.132 108.049 177.732 108.049Z" stroke="white" />
                        <path d="M177.732 108.049H150.695C148.936 108.049 147.242 107.387 145.95 106.195L73.2296 39.1463C68.5434 34.8256 71.6005 27 77.9746 27H103.927C105.668 27 107.346 27.6484 108.634 28.8188L182.439 95.8679C187.176 100.171 184.132 108.049 177.732 108.049Z" stroke="white" />
                        <path d="M102.04 141.563V113.5C102.04 107.258 109.591 104.138 113.998 108.558L195.097 189.92C199.496 194.333 196.37 201.862 190.139 201.862H161.392C159.514 201.862 157.715 201.107 156.398 199.767L104.046 146.468C102.76 145.159 102.04 143.397 102.04 141.563Z" fill="white" stroke="white" />
                    </svg>

                </NavLink>
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="nuevocliente" className="nav-link" > Nuevo Cliente </NavLink>
                    </li>
                    <li>
                        <NavLink to="MostrarClientes" className="nav-link" > Mostrar Clientes </NavLink>
                    </li>
                    <li>
                        <NavLink to="NuevoOEM" className="nav-link" > Nuevo Equipo OEM </NavLink>
                    </li>
                    <li>
                        <NavLink to="MostrarOEM" className="nav-link" > Mostrar Equipos OEM </NavLink>
                    </li>
                    <li>
                        <NavLink to="NuevoCustom" className="nav-link" > Nuevo Equipo Custom </NavLink>
                    </li>
                    <li>
                        <NavLink to="MostrarCustom" className="nav-link" > Mostrar Equipos Custom </NavLink>
                    </li>
                    <li>
                        <NavLink to="NuevoMulti" className="nav-link" > Nuevo Equipo Multifuncional </NavLink>
                    </li>
                    <li>
                        <NavLink to="MostrarMulti" className="nav-link" > Mostrar Equipos Multifuncional </NavLink>
                    </li>

                </ul>

            </div>

        </nav>


    );
}

export default Header;
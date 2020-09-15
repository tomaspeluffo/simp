import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import {loginGoogleAction, logoutGoogleAction} from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

import {obtenerProyectosAction} from '../../actions/proyectosAction'
import {obtenerEmpleadosAction} from '../../actions/empleadosAction'

import { useEffect } from 'react'


const Home = () => {


  const dispatch = useDispatch();

  const login = () =>{
    dispatch (loginGoogleAction())
}

  const logout = () =>{
      dispatch (logoutGoogleAction())
  }

  const superLogin = useSelector( (state) => state.usuario.loggedIn)  


  const cargarDatosProyecto = () =>{
    dispatch(obtenerProyectosAction())
    
}

const cargarDatosEmpleados = () =>{
    dispatch(obtenerEmpleadosAction())
}

useEffect(() => {
    cargarDatosProyecto()
    cargarDatosEmpleados()
    
}, [])


const proyectos = useSelector(state => state.proyecto.listadoproyectos)
const empelados = useSelector(state => state.empleado.listadoEmpleado)
  


    return ( 
        <div>
            <div className="home">


            <div className="login">
                {superLogin ?< button onClick={logout}>Cierra tu sesión </button> : <button onClick={login}>Iniciar Sesion</button> }
            </div>


                <div className="titulo">    
                    <h1>SIMP</h1> {/* Sistema Integral de Manejo de Personal */}

                   
                </div>

                <div className="contenedorHome">

                    <div className="boton">
                    <Link to={'/empleados/nuevo'}  className="link">Alta Empleado</Link>

                    </div>
                    
                    <div className="boton">
                    <Link to={'/empleados'}  className="link">Empleados</Link>
                        
                    </div>

                    <div className="boton">
                    <Link to={'/proyectos/nuevo'}  className="link">Alta Proyecto</Link>
                        
                    </div>

                    <div className="boton">
                    <Link to={'/proyectos'}  className="link">Proyectos</Link>
                        
                    </div>
                
                    
                </div>

                <div className="home-datos">
                    <h2>Datos</h2>
                    <p>Cantidad de empleados: {empelados.length }</p>
                    <p>Cantidad de proyectos: {proyectos.length}</p>

                </div>
            </div>
        </div>
     );
}
 
export default Home;
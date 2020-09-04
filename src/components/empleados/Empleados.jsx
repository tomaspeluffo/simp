import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Empleado from './Empleado'
import './empleados.css'
import { obtenerEmpleadosAction} from '../../actions/empleadosAction'
import {useDispatch, useSelector} from 'react-redux'




const Empleados = () => {
    const [boton, guardarBoton] = useState(1)

    
    const listado = useSelector( (state) => state.empleado.listadoEmpleado) 
    const idFiltro = useSelector( (state) => state.usuario.user.uid) 
    const listadoFiltrado = listado.filter(empleado => empleado.idUsuario === idFiltro)



    const dispatch = useDispatch()


    const cargarDatos = () =>{
        dispatch(obtenerEmpleadosAction())
    }

    useEffect(() => {
        cargarDatos()
    }, [listado])




    return ( 
        <div className="contenedor">

            <h1>Listado de Empleados</h1>


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Proyecto</th>
                        <th scope="col">Fecha de Contrato</th>
                        <th scope="col">Acciones</th>
                    </tr>  
                </thead>
                <tbody>
                    {listadoFiltrado.length === 0 ? null : (
                        listadoFiltrado.map(empleado => (
                            <Empleado 
                                key = {empleado.dni}
                                empleado = {empleado}
                                boton = {boton}
                                guardarBoton = {guardarBoton}
                            />
                        ))
                    )}
                </tbody>
            </table>

            <Link to={'/'}  className="link-empleado">Volver</Link>

        </div>
     );
}
 
export default Empleados;
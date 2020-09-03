import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Empleado from './Empleado'
import './empleados.css'
import { obtenerEmpleadosAction} from '../../actions/empleadosAction'
import {useDispatch, useSelector} from 'react-redux'




const Empleados = () => {
    
    const listado = useSelector( (state) => state.empleado.listadoEmpleado)   

   const dispatch = useDispatch()


    const cargarDatos = () =>{
        dispatch(obtenerEmpleadosAction())
    }

    useEffect(() => {
        cargarDatos()
    }, [])


    return ( 
        <div className="contenedor">

            <h1>Listado de Empleados</h1>


            <table className="">
                <thead className="">
                    <tr>
                        <th scope="">Nombre</th>
                        <th scope="">DNI</th>
                        <th scope="">Proyecto</th>
                        <th scope="">Fecha de Contrato</th>
                        <th scope="">Acciones</th>
                    </tr>  
                </thead>
                <tbody>
                    {listado.length === 0 ? null : (
                        listado.map(empleado => (
                            console.log(empleado),
                            <Empleado 
                                key = {empleado.dni}
                                empleado = {empleado}
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
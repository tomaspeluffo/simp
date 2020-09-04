import React, { useState } from 'react'
import {useHistory } from 'react-router-dom'
import {obtenerEmpleadoEditarAction, obtenerEmpleadoEliminarAction, eliminarEmpleadoAction} from '../../actions/empleadosAction'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'



const Empleado = ({empleado, boton, guardarBoton}) => {


    const history = useHistory()
    const dispatch = useDispatch()

    const selecionarEmpleado = (empleado) =>{
        dispatch(obtenerEmpleadoEditarAction(empleado))
        history.push(`/empleados/editar:${empleado.dni}`)
    }

    

    const selecionarEmpleadoEliminar = (empleado) =>{
        dispatch(obtenerEmpleadoEliminarAction(empleado))
        guardarBoton(!boton)
    }

    const id= useSelector( state => state.empleado.empleadoeliminar.id)
    console.log(id)

    
    const eliminarEmpleado = (id, empleado) =>{
        dispatch(eliminarEmpleadoAction(id, empleado))
        guardarBoton(!boton)
        
    }
    
    
    

    return ( 

        <>
        <tr>
            <td>{empleado.nombre}</td>
            <td>{empleado.dni}</td>
            <td>{empleado.proyecto}</td>
            <td>{empleado.fechaF}</td>
            <td className="acciones">
            <button 
                    onClick= {() => selecionarEmpleado(empleado)}
                    type='button' 
                    className="btn btn-dark mr-1"
                >Editar</button>
                <button
                    onClick={ boton ? () => selecionarEmpleadoEliminar(empleado) : () => eliminarEmpleado(id) }
                    type="button"
                    className="btn btn-danger mr-0"
                >{boton ? "Eliminar" : "Confirmar"}</button>

            </td>
        </tr>


        </>
     );
}
 
export default Empleado;
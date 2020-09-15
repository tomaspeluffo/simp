import React from 'react'
import {useHistory } from 'react-router-dom'
import {} from '../../actions/empleadosAction'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProyectoEditarAction, obtenerProyectoEliminarAction, eliminarProyectoAction} from '../../actions/proyectosAction'



const Empleado = ({proyecto, botonP, guardarBotonP}) => {


    const history = useHistory()
    const dispatch = useDispatch()

    const selecionarProyecto = (proyecto) =>{
        dispatch(obtenerProyectoEditarAction(proyecto))
        history.push(`/proyectos/editar:${proyecto.id}`)
    }


    const selecionarProyectoEliminar = (proyecto) =>{
        dispatch(obtenerProyectoEliminarAction(proyecto))
        guardarBotonP(!botonP)
    }

    const id= useSelector( state => state.proyecto.proyectoeliminar.id)

    
    const eliminarProyecto = (id, proyecto) =>{
        dispatch(eliminarProyectoAction(id, proyecto))
        guardarBotonP(!botonP)
        
    }
    
    
    

    return ( 

        <>
        <tr>
            <td>{proyecto.nombre}</td>
            <td>{proyecto.fechafin}</td>
            <td>{proyecto.personal}</td>
            <td className="acciones">
            <button 
                    onClick= {() => selecionarProyecto(proyecto)}
                    type='button' 
                    className="btn btn-dark mr-1"
                >Editar</button>
                <button
                    onClick={ botonP ? () => selecionarProyectoEliminar(proyecto) : () => eliminarProyecto(id) }
                    type="button"
                    className="btn btn-danger mr-0"
                >{botonP ? "Eliminar" : "Confirmar"}</button>

            </td>
        </tr>


        </>
     );
}
 
export default Empleado;
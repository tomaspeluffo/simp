import React, {useState, useEffect} from 'react'
import './editarproyecto.css';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {editarProyectoction} from '../../actions/proyectosAction'

// redux
import{useSelector, useDispatch} from 'react-redux'



const EditarProyecto = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    // Nuevo state de producto
    const[proyectoEditar, guardarProyectoEditar] = useState({
        fechafin: "", 

    })
    
    const {fechafin} = proyectoEditar



    // Obtener el state 
    const proyectoEdicion= useSelector( state => state.proyecto.proyectoeditar)
    const id= useSelector( state => state.proyecto.proyectoeditar.id)


    // llenar el state automaticamente

    useEffect(() => {
        guardarProyectoEditar(proyectoEdicion)

    }, [proyectoEdicion])


    const onChangeFormulario = e => {
        guardarProyectoEditar({
            ...proyectoEditar,
            [e.target.name] : e.target.value
        })
    }


    const submitProyecto = e => {
        e.preventDefault();

        dispatch( editarProyectoction(id, proyectoEditar) );

        history.push('/proyectos')
    
    }


    return ( 
        <div className="form-empleado">
        <div className="form-contenedor">
            <h1 className="form-titulo">Alta Proyecto</h1>
            
        <form
            onSubmit={submitProyecto}
        >
            <div className="form-campo">
                <label> Nombre Proyecto</label>
                <input 
                    type="text"
                    name= "nombre"
                    disabled={true}
                    // value={nombre}
                />
            </div>

            <div className="form-campo">
                <label> Personal</label>
                <input 
                    type="number"
                    name= "personal"
                    // value={nombre}
                />
            </div>

            <div className="form-campo">
                <label> Fecha de Finalizacion</label>
                <input 
                    type="date"
                    name= "fechafin"
                    onChange={onChangeFormulario}
                    value={fechafin}
                />
            </div>

         


            <button 
                type="submit"
                className="form-button"
            >Guardar</button>

        </form>

        <Link to={'/'}  className="link-form">Volver</Link>


        </div>

    </div>

     );
}
 
export default EditarProyecto;
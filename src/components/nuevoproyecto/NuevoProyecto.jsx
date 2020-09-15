import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// Redux
import {crearProyectoAction} from '../../actions/proyectosAction'
import {useDispatch, useSelector} from 'react-redux'


const NuevoProyecto = () => {

    const dispatch = useDispatch()


    const id = useSelector( (state) => state.usuario.user)  
    const {uid} = id
    
    const [nuevoProyecto, guardarNuevoProyecto] = useState({
        nombre: "",
        personal: 0,
        fechafin: "",
        idUsuario: uid
    })

    const {nombre, personal, fechafin} = nuevoProyecto


    const agregarProyecto = nuevoProyecto => dispatch( crearProyectoAction(nuevoProyecto) )

    const eventHandler = e => {
        guardarNuevoProyecto({
            ...nuevoProyecto, 
            [e.target.name] : e.target.value
        })
    }

    const submitProyecto= (e) =>{
        e.preventDefault()
       

        agregarProyecto(nuevoProyecto)

        guardarNuevoProyecto({
            nombre: "",
            personal: 0,
            fechafin: "",
            idUsuario: uid
        })
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
                        onChange={eventHandler}
                        value={nombre}
                    />
                </div>

                <div className="form-campo">
                    <label> Personal</label>
                    <input 
                        type="number"
                        name= "personal"
                        onChange={eventHandler}
                        value={personal}
                    />
                </div>

                <div className="form-campo">
                    <label> Fecha de Finalizacion</label>
                    <input 
                        type="date"
                        name= "fechafin"
                        onChange={eventHandler}
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
 
export default NuevoProyecto;
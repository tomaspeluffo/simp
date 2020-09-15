import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './proyectos.css'
import Proyecto from './Proyecto'

import {useDispatch, useSelector} from 'react-redux'
import { obtenerProyectosAction} from '../../actions/proyectosAction'



const Proyectos = () => {

    const [botonP, guardarBotonP] = useState(true)


    const listado = useSelector( (state) => state.proyecto.listadoproyectos) 
    const idFiltro = useSelector( (state) => state.usuario.user.uid) 
    const listadoFiltrado = listado.filter(proyecto => proyecto.idUsuario === idFiltro)

    const dispatch = useDispatch()


    const cargarDatos = () =>{
        dispatch(obtenerProyectosAction())
    }

    useEffect(() => {
        cargarDatos()
        
    }, [listado])

   

    return ( 
        <div className="contenedor">

            <h1>Listado de Proyectos</h1>


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha de Finalizacion</th>
                        <th scope="col">Personal</th>
                        <th scope="col">Acciones</th>
                    </tr>  
                </thead>
                <tbody>
                    {listadoFiltrado.length === 0 ? null : (
                        listadoFiltrado.map(proyecto => (
                            <Proyecto 
                                key = {proyecto.id}
                                proyecto = {proyecto}
                                botonP = {botonP}
                                guardarBotonP= {guardarBotonP}
                            />
                        ))
                    )}
                </tbody>
            </table>

            <Link to={'/'}  className="link-empleado">Volver</Link>

        </div>
     );
}
 
export default Proyectos;
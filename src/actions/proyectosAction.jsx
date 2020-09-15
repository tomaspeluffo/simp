import {
    CREAR_PROYECTO,
    LEEER_PROYECTO,
    LEEER_PROYECTO_EXITO,
    LEEER_PROYECTO_ERROR,
    OBTENER_PROYECTO_EDITAR,
    EDITAR_PROYECTO,
    OBTENER_PROYECTO_ELIMINAR,
    ELIMINAR_PROYECTO
}from '../types/index'

import {crearProyecto, obtenerProyectos, eliminarProyectoFirebase, editarProyectoFirebase } from '../firebase/firebase'



export function crearProyectoAction(proyecto){
    return async (dispatch, getState) =>{
        
        dispatch( crearProyectoExito(proyecto))
        
        let {proyectos} = getState().proyecto
        let {uid} = getState().usuario.user
       
        try {
            crearProyecto(proyectos, uid) 
        } catch (error) {
            console.log(error)
        }
    }
}

const crearProyectoExito = (proyectos) => ({ 
    type: CREAR_PROYECTO,
    payload: proyectos
})

export const obtenerProyectosAction = () =>async (dispatch, getState) =>{
    dispatch(leerProyectos())


    try {
     let listado = await obtenerProyectos()
     dispatch(leerProyectosExito(listado))

    } catch (error) {
        console.log(error.response)
        dispatch(leerProyectosError())   
    }
}

const leerProyectos = ()=>({
    type: LEEER_PROYECTO
})

const leerProyectosExito = (listado) =>({
    type: LEEER_PROYECTO_EXITO,
    payload: listado
})

const leerProyectosError = () =>({
    type: LEEER_PROYECTO_ERROR,
})



// Colocar empleado en edicion
export function obtenerProyectoEditarAction(proyecto) {
    return (dispatch) =>{
        dispatch (obtenerProyectoEditar(proyecto))
    }
}

const obtenerProyectoEditar = (proyecto) =>({
    type: OBTENER_PROYECTO_EDITAR,
    payload: proyecto
})

export function editarProyectoction(id, proyecto) {
    return(dispatch) => {

        try {
            dispatch(editarProyecto(proyecto))
            editarProyectoFirebase(id, proyecto)
        } catch (error) {
            console.log(error.response)
        }  
    }
}

const editarProyecto = () =>({
    type: EDITAR_PROYECTO
})


export function obtenerProyectoEliminarAction(proyecto) {
    return (dispatch) =>{
        dispatch (obtenerProyectoEliminar(proyecto))
    }
}

const obtenerProyectoEliminar = (proyecto) =>({
    type: OBTENER_PROYECTO_ELIMINAR,
    payload: proyecto
})



export function eliminarProyectoAction(id, proyecto) {
    return(dispatch) => {

        try {
            dispatch(eliminarProyecto(proyecto))
            eliminarProyectoFirebase(id, proyecto)
        } catch (error) {
            console.log(error.response)
        }  
    }
}

const eliminarProyecto = () =>({
    type: ELIMINAR_PROYECTO
})
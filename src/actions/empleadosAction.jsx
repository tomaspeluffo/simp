import {
    CREAR_EMPLEADO,
    LEEER_EMPLEADO,
    LEEER_EMPLEADO_EXITO,
    LEEER_EMPLEADO_ERROR,
    OBTENER_EMPLEADO_EDITAR,
    EDITAR_EMPLEADO,
    OBTENER_EMPLEADO_ELIMINAR,
    ELIMINAR_EMPLEADO

}from '../types/index'

import {crearEmpleado, obtenerEmpleados, editarEmpleadoFirebase, eliminarEmpleadoFirebase} from '../firebase/firebase'


export function crearEmpleadoAction(empleado){
    return async (dispatch, getState) =>{
        
        dispatch( crearEmpleadoExito(empleado))
        
        let {empleados} = getState().empleado
        let {uid} = getState().usuario.user
       
        try {
            crearEmpleado(empleados, uid) 
        } catch (error) {
            console.log(error)
        }
    }
}

const crearEmpleadoExito = (empleados) => ({ 
    type: CREAR_EMPLEADO,
    payload: empleados
})


export const obtenerEmpleadosAction = () =>async (dispatch, getState) =>{
    dispatch(leerEmpleados())


    try {
     let listado = await obtenerEmpleados()
     dispatch(leerEmpleadosExito(listado))

    } catch (error) {
        console.log(error.response)
        dispatch(leerEmpleadosError())   
    }
}

const leerEmpleados = ()=>({
    type: LEEER_EMPLEADO
})

const leerEmpleadosExito = (listado) =>({
    type: LEEER_EMPLEADO_EXITO,
    payload: listado
})

const leerEmpleadosError = () =>({
    type: LEEER_EMPLEADO_ERROR,
})


// Colocar empleado en edicion
export function obtenerEmpleadoEditarAction(empleado) {
    return (dispatch) =>{
        dispatch (obtenerEmpleadoEditar(empleado))
    }
}

const obtenerEmpleadoEditar = (empleado) =>({
    type: OBTENER_EMPLEADO_EDITAR,
    payload: empleado
})

export function editarEmpleadoAction(id, empleado) {
    return(dispatch) => {

        try {
            dispatch(editarEmpleado(empleado))
            editarEmpleadoFirebase(id, empleado)
        } catch (error) {
            console.log(error.response)
        }  
    }
}

const editarEmpleado = () =>({
    type: EDITAR_EMPLEADO
})


export function obtenerEmpleadoEliminarAction(empleado) {
    return (dispatch) =>{
        dispatch (obtenerEmpleadoEliminar(empleado))
    }
}

const obtenerEmpleadoEliminar = (empleado) =>({
    type: OBTENER_EMPLEADO_ELIMINAR,
    payload: empleado
})



export function eliminarEmpleadoAction(id, empleado) {
    return(dispatch) => {

        try {
            dispatch(eliminarEmpleado(empleado))
            eliminarEmpleadoFirebase(id, empleado)
        } catch (error) {
            console.log(error.response)
        }  
    }
}

const eliminarEmpleado = () =>({
    type: ELIMINAR_EMPLEADO
})
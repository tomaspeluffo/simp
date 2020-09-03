import {
    CREAR_EMPLEADO,
    LEEER_EMPLEADO,
    LEEER_EMPLEADO_EXITO,
    LEEER_EMPLEADO_ERROR

}from '../types/index'

import {crearEmpleado, obtenerEmpleados} from '../firebase/firebase'


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

    const {uid} = getState().usuario.user

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





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

const crearEmpleadoExito = (empleado) => ({ 
    type: CREAR_EMPLEADO,
    payload: empleado
})


export const obtenerEmpleadosAction = () =>(dispatch, getState) =>{
    dispatch(leerEmpleados())

    const {uid} = getState().usuario.user
    return obtenerEmpleados(uid)
    .then(empleado =>{
        dispatch(leerEmpleadosExito(empleado))
    })

    .catch(error =>{
        console.log(error)
        dispatch(leerEmpleadosError(error))
    })
}

const leerEmpleados = ()=>({
    type: LEEER_EMPLEADO
})

const leerEmpleadosExito = (empleado) =>({
    type: LEEER_EMPLEADO_EXITO,
    payload: [...empleado]
})

const leerEmpleadosError = (error) =>({
    type: LEEER_EMPLEADO_ERROR,
    payload: error.message
})





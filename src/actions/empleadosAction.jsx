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

     const listado = await obtenerEmpleados(uid)
     console.log(listado)

        dispatch(leerEmpleadosExito())

        dispatch(leerEmpleadosError())
}

const leerEmpleados = ()=>({
    type: LEEER_EMPLEADO
})

const leerEmpleadosExito = (empleado) =>({
    type: LEEER_EMPLEADO_EXITO,
    // payload: [...empleado]
})

const leerEmpleadosError = () =>({
    type: LEEER_EMPLEADO_ERROR,
    // payload: error.message
})





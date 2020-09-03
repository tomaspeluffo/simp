import {
    CREAR_EMPLEADO,
    LEEER_EMPLEADO,
    LEEER_EMPLEADO_EXITO,
    LEEER_EMPLEADO_ERROR
}from '../types/index'


const initalState ={
    empleados: {}, 
    listadoEmpleado: [],
    error: null,
    empleadoeliminar: null,
    empleadoeditar:null,
    loading: false
}

export default function (state = initalState, action){
    switch (action.type) {

    case LEEER_EMPLEADO_EXITO:
        return{...state, loading: false, listadoEmpleado: action.payload, lsitadoEmpleado :state.listadoEmpleado.filter(empleado => empleado.idUsuario === state.usuario.uid )  }
    
    case LEEER_EMPLEADO:
        return{...state, loading: true }

    case CREAR_EMPLEADO:
        return{...state, empleados:  action.payload}

    default:
        return state;
            
}
}
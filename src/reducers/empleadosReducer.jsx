import {
    CREAR_EMPLEADO,
    LEEER_EMPLEADO,
    LEEER_EMPLEADO_EXITO,
    OBTENER_EMPLEADO_EDITAR,
    EDITAR_EMPLEADO,
    OBTENER_EMPLEADO_ELIMINAR,
    ELIMINAR_EMPLEADO
}from '../types/index'


const initalState ={
    empleados: {}, 
    listadoEmpleado: [],
    error: false,
    empleadoeliminar: {},
    empleadoeditar:{},
    loading: false, 
  
}

export default function (state = initalState, action){
    switch (action.type) {

    case ELIMINAR_EMPLEADO:
        return {...state, empleadoeliminar: {}}

    case OBTENER_EMPLEADO_ELIMINAR:
        return{...state, empleadoeliminar : action.payload}

    case EDITAR_EMPLEADO:
        return{...state, empleadoeditar:{}}

    case OBTENER_EMPLEADO_EDITAR:
        return {...state, empleadoeditar : action.payload}
    
    case LEEER_EMPLEADO_EXITO:
        return{ ...state, loading: false, listadoEmpleado: action.payload}
    
    case LEEER_EMPLEADO:
        return{...state, loading: true }

    case CREAR_EMPLEADO:
        return{...state, empleados:  action.payload}

    default:
        return state;
            
}
}


// , listadoEmpleado :state.listadoEmpleado.filter(empleado => empleado.idUsuario === state.usuario.uid )
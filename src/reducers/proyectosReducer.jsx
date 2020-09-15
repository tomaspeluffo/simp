import {
    CREAR_PROYECTO,
    LEEER_PROYECTO,
    LEEER_PROYECTO_EXITO,
    OBTENER_PROYECTO_EDITAR,
    EDITAR_PROYECTO,
    OBTENER_PROYECTO_ELIMINAR,
    ELIMINAR_PROYECTO
}from '../types/index'


const initalState ={
    proyectos: [],
    error: null,
    proyectoeliminar:{},
    proyectoeditar:{},
    listadoproyectos: []
}

export default function (state = initalState, action){
    switch (action.type) {

    case ELIMINAR_PROYECTO:
        return {...state, proyectoeliminar: {}}
    
    case OBTENER_PROYECTO_ELIMINAR:
        return{...state, proyectoeliminar : action.payload}
    
    case EDITAR_PROYECTO:
        return{...state, proyectoeditar:{}}
    
    case OBTENER_PROYECTO_EDITAR:
        return {...state, proyectoeditar : action.payload}

    case LEEER_PROYECTO_EXITO:
        return{ ...state, loading: false, listadoproyectos: action.payload}
        
    case LEEER_PROYECTO:
        return{...state, loading: true }

    case CREAR_PROYECTO:
         return{...state, proyectos:  action.payload}

    default:
        return state;
            
}
} 
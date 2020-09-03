import {combineReducers} from 'redux'
import empleadosReducer from './empleadosReducer'
import proyectosReducer from './proyectosReducer'
import userReducer from './userReducer'


 const reducer=  combineReducers({
    empleado: empleadosReducer, 
    proyecto: proyectosReducer, 
    usuario : userReducer
})

export default reducer;
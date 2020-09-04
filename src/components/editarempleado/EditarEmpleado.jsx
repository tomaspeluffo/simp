import React, { useState, useEffect } from 'react'
import './editarempleado.css';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {editarEmpleadoAction} from '../../actions/empleadosAction'

// redux
import{useSelector, useDispatch} from 'react-redux'


const EditarEmpleado = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    // Nuevo state de producto
    const[empleadoEditar, guardarEmpleadoEditar] = useState({
        nombre: "",
        dni: "",
       domicilio: "",
       proyecto : "",
       fechaF: ""

    })

    const {nombre, dni, domicilio, proyecto, fechaF} = empleadoEditar



    // Obtener el state 
    const empleadoEdicion= useSelector( state => state.empleado.empleadoeditar)
    const id= useSelector( state => state.empleado.empleadoeditar.id)


    // llenar el state automaticamente

    useEffect(() => {
        guardarEmpleadoEditar(empleadoEdicion)

    }, [empleadoEdicion])


    const onChangeFormulario = e => {
        guardarEmpleadoEditar({
            ...empleadoEditar,
            [e.target.name] : e.target.value
        })
    }


    const submitEmpleado = e => {
        e.preventDefault();

        dispatch( editarEmpleadoAction(id, empleadoEditar) );

        history.push('/empleados')
    
    }


    return ( 
        <div className="form-empleado">
            <div className="form-contenedor">
                <h1 className="form-titulo">Editar Empleado</h1>
                
            <form
                className='form'
                onSubmit={submitEmpleado}
            >
                <div className="form-campo">
                    <label> Nombre y Apeliido</label>
                    <input 
                        type="text"
                        name= "nombre"
                        disabled= {true}
                        value={nombre}
                      
                    />
                </div>

                <div className="form-campo">
                    <label>DNI</label>
                    <input 
                        type="number"
                        name= "dni"
                        disabled= {true}
                        value= {dni}
   
                    />
                </div>

                <div className="form-campo">
                    <label> Domicilio</label>
                    <input 
                        type="text"
                        name= "domicilio"
                        value = {domicilio}
                        onChange={onChangeFormulario}
                        
                    />
                </div>

                <div className="form-campo">
                <label> Proyecto</label>
                    <select
                        name= "proyecto"
                        value={proyecto}
                        onChange={onChangeFormulario}
                        
                    >
                        <option value="">Elegir Proyecto</option> 
                      
                         
                    </select>   
                </div>

                <div className="form-campo">
                    <label>Fecha de Contrato</label>
                    <input 
                        type="date"  
                        name= "fechaF"
                        value={fechaF}
                        onChange={onChangeFormulario}
                        
                    />
                </div>

                <button 
                    type="submit"
                    className="form-button"
                >Editar</button>

            </form>

            <Link to={'/'}  className="link-form">Volver</Link>



            </div>

        </div>

     );
}
 
export default EditarEmpleado;
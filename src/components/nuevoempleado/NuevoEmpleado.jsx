    import React, { useState} from 'react'
import './nuevoempleado.css';
import { Link } from 'react-router-dom'


// Redux
import {crearEmpleadoAction} from '../../actions/empleadosAction'
import {useDispatch, useSelector} from 'react-redux'



const NuevoEmpleado = () => {

    const dispatch = useDispatch()

    const id = useSelector( (state) => state.usuario.user)  
    const {uid} = id
    
    const [nuevoEmpleado, guardarNuevoEmpleado] = useState({
        nombre: "",
        dni : "", 
        cuil: "",
        fecha: "",
        domicilio:"",
        proyecto: "",
        fechaF: "",
        idUsuario: uid
    })

    const {nombre, dni, cuil, fecha, domicilio, proyecto, fechaF, idUsuario} = nuevoEmpleado


    const agregarEmpleados = nuevoEmpleado => dispatch( crearEmpleadoAction(nuevoEmpleado) )
    

    const eventHandler = e => {
        guardarNuevoEmpleado({
            ...nuevoEmpleado, 
            [e.target.name] : e.target.value
        })
    }

    const submitEmpleado= (e) =>{
        e.preventDefault()
        if(nombre.trim() === "" || dni.trim() === ""|| cuil.trim() === "" || !idUsuario){
            return
        }

        agregarEmpleados(nuevoEmpleado)

        guardarNuevoEmpleado({
            nombre: "",
            dni : "", 
            cuil: "",
            fecha: "",
            domicilio:"",
            proyecto: "",
            fechaF: "",
            idUsuario: uid
        })
    } 

    return ( 
        <div className="form-empleado">
            <div className="form-contenedor">
                <h1 className="form-titulo">Alta Empleado</h1>
                
            <form
            className='form'
                onSubmit={submitEmpleado}
            >
                <div className="form-campo">
                    <label> Nombre y Apeliido</label>
                    <input 
                        type="text"
                        name= "nombre"
                        value={nombre}
                        onChange={eventHandler}
                    />
                </div>

                <div className="form-campo">
                    <label>DNI</label>
                    <input 
                        type="number"
                        name= "dni"
                        value={dni}
                        onChange={eventHandler}

                    />
                </div>

                <div className="form-campo">
                    <label>CUIL</label>
                    <input 
                        type="number"  
                        name= "cuil"
                        onChange={eventHandler}
                        value={cuil}
                    />
                </div>

                <div className="form-campo">
                    <label>Fecha de Nacimiento</label>
                    <input 
                        type="date"  
                        name= "fecha"
                        onChange={eventHandler}
                        value={fecha}
                    />
                </div>

                <div className="form-campo">
                    <label> Domicilio</label>
                    <input 
                        type="text"
                        name= "domicilio"
                        onChange={eventHandler}
                        value={domicilio}
                    />
                </div>

                <div className="form-campo">
                <label> Proyecto</label>
                    <select
                        name= "proyecto"
                        value= {proyecto}
                        onChange={eventHandler}
                    >
                        <option value="">Elegir Proyecto</option> 
                        {/* {proyectos.map( lista =>(
                        <option value={lista.nombre}>{lista.nombre}</option> 

                        ))} */}
                         
                    </select>
                </div>


                <div className="form-campo">
                    <label>Fecha de Contrato</label>
                    <input 
                        type="date"  
                        name= "fechaF"
                        onChange={eventHandler}
                        value={fechaF}
                    />
                </div>

                <button 
                    type="submit"
                    className="form-button"
                >Guardar</button>

            </form>

            <Link to={'/'}  className="link-form">Volver</Link>


            </div>

        </div>

     );
}
 
export default NuevoEmpleado;
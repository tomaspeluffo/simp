import React from 'react'
import {Link} from 'react-router-dom'
import './proyectos.css'


const Proyectos = () => {

   

    return ( 
        <div className="contenedor">

            <h1>Listado de Proyectos</h1>


            <table className="">
                <thead className="">
                    <tr>
                        <th scope="">Nombre</th>
                        <th scope="">Personal</th>
                        <th scope="">Fecha de Finalizacion</th>
                        <th scope="">Acciones</th>
                    </tr>  
                </thead>
                <tbody>
                    {/* {productos.length === 0 ? null : (
                        productos.map(producto => (
                            <Producto 
                                key = {producto.id}
                                producto = {producto}
                            />
                        ))
                    )} */}
                </tbody>
            </table>

            <Link to={'/'}  className="link-empleado">Volver</Link>

        </div>
     );
}
 
export default Proyectos;
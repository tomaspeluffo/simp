import React from 'react';
import{BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'
import NuevoEmpleado from './components/nuevoempleado/NuevoEmpleado'
import EditarEmpleado from './components/editarempleado/EditarEmpleado'
import NuevoProyecto from './components/nuevoproyecto/NuevoProyecto'
import EditarProyecto from './components/editarproyectos/EditarProyecto'
import Proyectos from './components/proyectos/Proyectos'
import Empleados from './components/empleados/Empleados'

// REDUX
import { Provider } from 'react-redux'
import generateStore from './store'

let storePlus = generateStore()



function App() {
  return (
    <Router>
      <Provider store={storePlus}>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/empleados/nuevo' component={NuevoEmpleado} />
          <Route exact path ='/empleados/editar:id' component={EditarEmpleado} />
          <Route exact path ='/empleados' component={Empleados} />
          <Route exact path ='/proyectos/nuevo' component={NuevoProyecto} />
          <Route exact path ='/proyectos/editar:id' component={EditarProyecto} />
          <Route exact path ='/proyectos' component={Proyectos} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

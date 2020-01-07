import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

class App extends Component {
  constructor () {
    super ();
    this.state = {menu: ["Inicio", "contactos", "cuentas", "configuración"]}
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
          <a href="http://gestionar.github.io/demogestionar">
            <img src={logo} alt="logo"></img>
          </a>
          </div>
          <div className="App-menu">
            <Link className="btn-menu" to='/inicio'>Incio</Link>        
            <Link className="btn-menu" to='/contactos'>Contactos</Link>
            <Link className="btn-menu" to='/cuentas'>Cuentas</Link>
            <Link className="btn-menu" to='/configuracion'>Configuración</Link>
          </div>
        </header>
        <div className="App-cuerpo">
          <Switch>
            <Route exact path='/inicio' render={() => <InicioPag />} />
            <Route exact path='/contactos' render={() => <ContactosPag/>} />
            <Route exact path='/configuracion' render={() => <ConfigPag/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

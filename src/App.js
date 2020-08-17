import React from 'react';
import logo from './logo.svg';
import './App.css';

import MiComponente from './components/MiComponente';


function HolaMundo(nombre, edad){
  var presentacion = (
      <div>
        <h2> Hola, soy {nombre}</h2>
        <h3> Tengo {edad} años</h3>          
      </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Alexis Santos"
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Que onda brothelllllllll
        </p>
          {HolaMundo(nombre,12)}

        <section className="componente">
          <MiComponente/>                   
        </section>

      </header>
    </div>
  );
}

export default App;

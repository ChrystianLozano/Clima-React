import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
    const [busqueda, guardarBusqueda] = useState({
      ciudad: "",
      pais: ""
    });
    const [consultar, guardarConsultar] = useState(false)

    const {ciudad, pais} = busqueda

    useEffect(() =>{

      if(consultar){
              const consultarApi = async () => {
                let key = "3d37690a5472e67b78a94eb15a642f78";
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                console.log(resultado);
              };
              consultarApi()
      }
      
    }, [consultar])



  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda = {busqueda}
                guardarBusqueda = {guardarBusqueda}
                guardarConsultar = {guardarConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import { Fragment, useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Clima from './components/Clima'
import Error from './components/Error'
import './App.css'

const App = () => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consulta, setConsulta] = useState(false);

  const [resultado, setResultado] = useState({});

  const [error, setError] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarApi =async () => {
      if (consulta) {

        const appId = 'c9a0f31f1d098d16553dbed3edf0c4ea';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsulta(false);

        if (resultado.cod == '404') {
          setError(true);
        } else {
          setError(false);
        }
  
      }

    }
    consultarApi();
  },[consulta]);

  let component;
  if (error) {
    component = <Error mensaje='No se ha encontrado la ciudad' />;
  } else {
    component = <Clima resultado={resultado}/>;
  }

  return (
    <Fragment>
      <Header titulo='Clima React App' />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsulta={setConsulta}/>
            </div>
            <div className="col m6 s12">
              {component}
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App

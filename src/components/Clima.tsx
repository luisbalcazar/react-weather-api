import React, { FunctionComponent } from "react";
import PropTypes from 'prop-types';

interface InClima {
    resultado: any;
}

const Clima: FunctionComponent<InClima>  = ({resultado}) => {

    const {name, main, weather} = resultado;
    const kelvin = 273.15;
    
    if (!name) return null;
    const temperatura = parseFloat(main.temp) - kelvin;
    const temperatura_max = parseFloat(main.temp_max) - kelvin;
    const temperatura_min = parseFloat(main.temp_min) - kelvin;
    const clima_g = weather[0].main;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {temperatura.toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Máxima: {temperatura_max.toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Minima: {temperatura_min.toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Minima: {temperatura_min.toFixed(2)}<span>&#x2103;</span>
                </p>
                <p>Clima: 
                    {clima_g == 'Clouds' && <span>Nublado</span>}
                    {clima_g == 'Clear' && <span>Despejado</span>}
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;
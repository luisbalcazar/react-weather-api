import React, { FunctionComponent, useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

interface InFormulario {
    busqueda: any;
    setBusqueda(data: object): void;
    setConsulta(data: boolean): void;
}

const Formulario: FunctionComponent<InFormulario> = ({busqueda, setBusqueda, setConsulta}) =>{

    const [error, setError] = useState(false);

    const {ciudad, pais} = busqueda;

    const handleChange = (e: any) => {

        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setConsulta(true);
    }

    return (
        <form onSubmit={handleSubmit}>

            {error && <Error mensaje='Todos los campos son obligatorios.' />}

            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" defaultValue={ciudad} onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" defaultValue={pais} onChange={handleChange}>
                    <option value="">-- Seleccione un Pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="VE">Venezuela</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit" 
                    value="Buscar Clima" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4" />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsulta: PropTypes.func.isRequired
}

export default Formulario;
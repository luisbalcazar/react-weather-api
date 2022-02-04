import React, { FunctionComponent } from "react";
import PropTypes from 'prop-types';

interface InError {
    mensaje: string
}

const Error: FunctionComponent<InError> = ({mensaje}) => {
    return (
        <p className="red darken-2 error">{mensaje}</p>
    );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
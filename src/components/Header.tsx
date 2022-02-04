import React, { FunctionComponent } from "react";
import PropTypes from 'prop-types';

interface InHeader {
    titulo: string;
}

const Header: FunctionComponent<InHeader>  = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#" className="brand-logo">{titulo}</a>
                
            </div>
        </nav>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
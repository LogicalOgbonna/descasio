import PropTypes from "prop-types";
import React from 'react';
import './ButtonRow.css';

const ButtonRow = ({ children }) => (
    <div data-testid='button-row' className="d-flex buttons-container m-0">
        {children}
    </div>
)

ButtonRow.propTypes = {
    children: PropTypes.node.isRequired
}

export default ButtonRow

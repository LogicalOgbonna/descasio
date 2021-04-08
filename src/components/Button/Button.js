import PropTypes from "prop-types";
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, enter, last }) => {
    const isOperator = val => {
        return isNaN(val);
    };
    const click = () => onClick(children)
    if (enter) return <div className="w-100"><button data-testid="enter-button" onClick={click} className={`btn enter-button`}>{children}</button></div>
    return <div className={last ? "w-50" : "w-100"}><button data-testid="button" onClick={click} className={`btn ${isOperator(children) ? 'operator' : 'number'}`}>{children}</button></div>
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    enter: PropTypes.bool,
    last: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

export default Button

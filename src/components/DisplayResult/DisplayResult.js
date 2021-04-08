import PropTypes from "prop-types";
import React from 'react';
import './DisplayResult.css';

const DisplayResult = ({ input, answer }) => (
    <div data-testid="display-result" className="result-container">
        <span className="current-operation">{input}</span>
        <h1 className="answer">{answer}</h1>
    </div>
)

DisplayResult.propTypes = {
  answer: PropTypes.number.isRequired,
  input: PropTypes.string.isRequired
}

export default DisplayResult

import React from 'react';
import Display from './Display.js';

function Calculator(props) {
    return(
    <div className="calculator">
        This is the calculator that will house the display and buttons
        <div>
            <Display display={props.display} />
        </div>
    </div>
    )};

export default Calculator;
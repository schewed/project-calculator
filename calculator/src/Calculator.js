import React from 'react';
import Display from './Display.js';
import ButtonGrid from './ButtonGrid.js';

function Calculator(props) {
    return(
    <div className="calculator">
        <div>
            <Display display={props.display} />
        </div>
        <div>
            <ButtonGrid />
        </div>
    </div>
    )
}

export default Calculator;
import React from 'react';

function ButtonGrid(props) {
    return(
        <div>
            <p>This is where the individual buttons will go:</p>
            <button id="+" className="button">+</button>
            <button id="-" className="button">-</button>
            <button id="*" className="button">*</button>
            <button id="/" className="button">/</button>
            <br></br>
            <button id="0" className="button">0</button>
            <button id="1" className="button">1</button>
            <button id="2" className="button">2</button>
            <button id="3" className="button">3</button>
            <button id="4" className="button">4</button>
            <button id="5" className="button">5</button>
            <button id="6" className="button">6</button>
            <button id="7" className="button">7</button>
            <button id="8" className="button">8</button>
            <button id="9" className="button">9</button>
            <button id="clear" className="button">C</button>
        </div>
    );
}

export default ButtonGrid;
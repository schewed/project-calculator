import React from 'react';

function ButtonGrid(props) {
    var symbols = ['+', '-', '*', '÷', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C', '√', 'x^2', 'x^3', 'x^y', '𝜋', 'e'];
    return(
        // should iterate through an array and map buttons
        <div>
            <p>Buttons:</p>
            <button id="+" className="button">+</button>
            <button id="-" className="button">-</button>
            <button id="*" className="button">*</button>
            <button id="÷" className="button">÷</button>
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
            <button id="sqrt" className="button">√</button>
            <button id="exp2" className="button">x<sup>2</sup></button>
            <button id="exp3" className="button">x<sup>3</sup></button>
            <button id="exp" className="button">x<sup>y</sup></button>
            <button id="pi" className="button">𝜋</button>
            <button id="e" className="button">e</button>
        </div>
    );
}

export default ButtonGrid;
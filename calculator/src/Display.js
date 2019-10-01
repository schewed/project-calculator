import React from 'react';

function Display(props) {
    return(
        <div className="display">
            This is where the display will go
            <p>
                {props.display}
            </p>
        </div>
    );
}

export default Display;
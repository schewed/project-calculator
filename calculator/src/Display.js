import React from 'react';

function Display(props) {
    return(
        <div className="display">
            <p>
                {props.display}
            </p>
        </div>
    );
}

export default Display;
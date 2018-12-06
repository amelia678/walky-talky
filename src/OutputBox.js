import React from 'react';


const OutputBox = (props) => {
    return (
        <div className= {`
        output-box
        ${props.bgClass}
        ${props.olClass}`}>
            {props.theText}
        </div>

    );
};

export default OutputBox;
import React from 'react';


const InputBox = (props) => {
    return (
        <input 
        className='input-box'
        onChange = {(event) => {
            console.log(event.target.value);
            props.handleChange(event.target.value);
        }} 
        />
    );
};

export default InputBox;
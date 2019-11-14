import React from 'react';

const FormInput = props => {
    const {labelName, inputName, handleFormChanges, inputType, placeHolder, value } =  props;
    return(
        <div>
            <label htmlFor='name'>{labelName}</label>
            <input name={inputName} onChange={handleFormChanges} type={inputType} placeholder={placeHolder} value={value}/>
        </div>
    )
}

export default FormInput;
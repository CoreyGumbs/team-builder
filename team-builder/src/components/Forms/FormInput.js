import React from 'react';

const FormInput = props => {
    const {labelName, inputName, handleFormChanges, inputType, placeHolder } =  props;
    return(
        <div>
            <label for='name'>{labelName}</label>
            <input name={inputName} onChange={handleFormChanges} type={inputType} placeholder={placeHolder}/>
        </div>
    )
}

export default FormInput;
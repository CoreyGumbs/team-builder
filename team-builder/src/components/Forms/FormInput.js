import React from 'react';
import {FormElements, Label, Input} from '../StyledComponents/FormStyles'

const FormInput = props => {
    const {labelName, inputName, handleFormChanges, inputType, placeHolder, value } =  props;
    return(
        <FormElements>
            <Label htmlFor='name'>{labelName}</Label>
            <Input name={inputName} onChange={handleFormChanges} type={inputType} placeholder={placeHolder} value={value}/>
        </FormElements>
    )
}

export default FormInput;
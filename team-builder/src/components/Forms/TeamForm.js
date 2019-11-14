import React from 'react';
import FormInput from './FormInput';

const TeamForm = props => {
    const { handleChanges } = props;

    return (
        <div>
            <form>
                <FormInput 
                    labelName={'Name:'} 
                    inputName={'name'} 
                    handleFormChanges={handleChanges} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Name'} 
                />
                <FormInput 
                    labelName={'Email:'} 
                    inputName={'email'} 
                    handleFormChanges={handleChanges} 
                    inputType={'email'} 
                    placeHolder={'Enter Valid Email'} 
                />
                <FormInput 
                    labelName={'Role:'} 
                    inputName={'role'} 
                    handleFormChanges={handleChanges} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Role'} 
                />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TeamForm;
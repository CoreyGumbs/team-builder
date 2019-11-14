import React from 'react';
import FormInput from './FormInput';

const TeamForm = props => {
    const { setTeamMembers } = props;

    const handleInputChange = e =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <form>
                <FormInput 
                    labelName={'Name:'} 
                    inputName={'name'} 
                    handleFormChanges={handleInputChange} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Name'} 
                />
                <FormInput 
                    labelName={'Email:'} 
                    inputName={'email'} 
                    handleFormChanges={handleInputChange} 
                    inputType={'email'} 
                    placeHolder={'Enter Valid Email'} 
                />
                <FormInput 
                    labelName={'Role:'} 
                    inputName={'role'} 
                    handleFormChanges={handleInputChange} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Role'} 
                />
            </form>
        </div>
    )
}

export default TeamForm;
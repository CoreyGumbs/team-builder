import React, {useState} from 'react';
import FormInput from './FormInput';

const TeamForm = props => {
    const {addTeamMember} = props;
    
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e =>{
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    }

    console.log(member);

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
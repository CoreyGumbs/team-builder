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

    const submitForm = e =>{
        e.preventDefault();
        addTeamMember(member);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <FormInput 
                    labelName={'Name:'} 
                    inputName={'name'} 
                    handleFormChanges={handleChanges} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Name'} 
                    value={member.name}
                />
                <FormInput 
                    labelName={'Email:'} 
                    inputName={'email'} 
                    handleFormChanges={handleChanges} 
                    inputType={'email'} 
                    placeHolder={'Enter Valid Email'} 
                    value={member.email}
                />
                <FormInput 
                    labelName={'Role:'} 
                    inputName={'role'} 
                    handleFormChanges={handleChanges} 
                    inputType={'text'} 
                    placeHolder={'Enter Your Role'}
                    value={member.role} 
                />
                 <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}

export default TeamForm;
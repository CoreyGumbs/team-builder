import styled from 'styled-components';
 

export const FormContainer = styled.section`
     width: 40%;
`;

export const Form  = styled.form`
    width: 100%;
`;

export const FormElements = styled.div`
    margin: 20px 0;
    padding: 10px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items:center;
`;

export const Label = styled.label`
    margin-right: 5px;
    font-size: 3rem;

`;

export const Input = styled.input`
    width: 80%;
    padding: 13px 20px;
    font-size: 2rem;
    border: 1px solid black;
`;

export const SubmitBtn = styled.button.attrs({
    type: 'submit'
})`
`;
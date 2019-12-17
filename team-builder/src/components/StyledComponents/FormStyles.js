import styled from 'styled-components';
 

export const FormContainer = styled.section`
     width: 40%;
`;

export const Form  = styled.form`
    width: 100%;
    padding: 10px 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const FormElements = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items:center;
`;

export const Label = styled.label`
    margin-right: 5px;
    font-size: 3rem;
    color: #999;
`;

export const Input = styled.input`
    width: 70%;
    padding: 13px 20px;
    font-size: 2rem;
    border: 1px solid #999;
    border-radius: 5px;
    color: #999;
`;

export const SubmitBtn = styled.button.attrs({
    type: 'submit'
})`
    width: 80%;
    margin: 20px 0;
    padding: 20px 0;
    font-size: 2rem;
    border-radius: 10px;
    background-color: green;
    color: white;

    &:hover {
        background-color: midnightblue;
    }
`;
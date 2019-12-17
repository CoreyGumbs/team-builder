import styled from 'styled-components';


export const NoTeamContainer = styled.section`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoTeamHeading = styled.h1`
    font-size: 3rem;
`;

export const TeamContainer =  styled.section`
    width: 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const TeamCardContainer = styled.div`
    width: 80%;
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #999;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-color:  whitesmoke;
    border-radius: 10px;
`;

export const TeamCardImgContainer = styled.div`
    width: 150px;
    height: 150px;
`;

export const TeamCardTextContainer =  styled.div`
    width: 70%;
    padding: 0 20px;  
   
`;

export const TeamCardAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export const TeamCardHeading = styled.h2`
    font-size: 3rem;
`;

export const TeamCardTxt = styled.p`
    font-size: 2rem;
`;
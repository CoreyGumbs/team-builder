import React from 'react';
import {TeamCardContainer, TeamCardTextContainer, TeamCardImgContainer, 
    TeamCardAvatar, TeamCardHeading, TeamCardTxt} from '../StyledComponents/TeamStyles';


const TeamMemberCard = props => {
    const {member} = props;

    return(
        <TeamCardContainer>
            <TeamCardImgContainer>
                <TeamCardAvatar src={member.avatar} alt={member.name} />
            </TeamCardImgContainer>
            <TeamCardTextContainer>
                <TeamCardHeading>{member.name}</TeamCardHeading>
                <TeamCardTxt>{member.email}</TeamCardTxt>
                <TeamCardTxt>{member.role}</TeamCardTxt>
            </TeamCardTextContainer>
        </TeamCardContainer>
    )
}

export default TeamMemberCard;
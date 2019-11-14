import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { TeamContainer,  NoTeamContainer, NoTeamHeading } from '../StyledComponents/TeamStyles';

const TeamMembers = props => {
    const {teamMembers} = props;

    if(teamMembers.length === 0) return (
        <NoTeamContainer>
            <NoTeamHeading>Please Add A Team Member!</NoTeamHeading>
        </NoTeamContainer>
    )
    
    return(
        <TeamContainer>
           {teamMembers.map((member, idx) => (
               <TeamMemberCard member={member} key={idx} />
           ))}
        </TeamContainer>
    )
}


export default TeamMembers;
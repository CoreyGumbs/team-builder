import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import {TeamContainer} from '../StyledComponents/TeamStyles';

const TeamMembers = props => {
    const {teamMembers} = props;

    if(teamMembers.length === 0) return (
        <TeamContainer>
            Please Add A Team Member
        </TeamContainer>
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
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import {TeamContainer} from '../StyledComponents/TeamStyles';

const TeamMembers = props => {
    const {teamMembers} = props;
    
    return(
        <TeamContainer>
           {teamMembers.map((member, idx) => (
               <TeamMemberCard member={member} key={idx} />
           ))}
        </TeamContainer>
    )
}


export default TeamMembers;
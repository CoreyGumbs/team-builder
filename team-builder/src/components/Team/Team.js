import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = props => {
    const {teamMembers} = props;
    
    return(
        <div>
           {teamMembers.map((member, idx) => (
               <TeamMemberCard member={member} key={idx} />
           ))}
        </div>
    )
}


export default TeamMembers;
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = props => {
    const {teamMembers} = props;
    console.log(teamMembers);
    return(
        <div>
           {teamMembers.map((member, idx) => (
               <TeamMemberCard member={member} key={idx} />
           ))}
        </div>
    )
}


export default TeamMembers;
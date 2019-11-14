import React from 'react';
import TeamMembers from './Team';


const TeamMemberCard = props => {
    const {member} = props;

    return(
        <div>
            <p>{member.name}</p>
        </div>
    )
}

export default TeamMemberCard;
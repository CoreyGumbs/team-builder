import React from 'react';


const TeamMemberCard = props => {
    const {member} = props;

    return(
        <div>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
    )
}

export default TeamMemberCard;
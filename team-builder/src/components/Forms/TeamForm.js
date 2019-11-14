import React from 'react';

const TeamForm = props => {
    const { handleFormChanges } = props;
    return (
        <div>
            <form action="">
                <input onChange={handleFormChanges} type="text"/>
                <input onChange={handleFormChanges }type="text"/>
                <input onChange={handleFormChanges} type="text"/>
            </form>
        </div>
    )
}

export default TeamForm;
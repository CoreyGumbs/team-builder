import React, {useState} from 'react';
import TeamForm from './components/Forms/TeamForm';
import TeamMembers from './components/Team/Team';
import GlobalStyles from './components/StyledComponents/GlobalStyles';
import {AppContainer} from './components/StyledComponents/AppStyles';

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = member =>{
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }

    setTeamMembers([...teamMembers, newMember]);
  }
  return (
    <AppContainer>
      <GlobalStyles/>
      <TeamForm addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </AppContainer>
  );
}

export default App;

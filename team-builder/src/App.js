import React, {useState} from 'react';
import './css/App.css';
import TeamForm from './components/Forms/TeamForm';
import TeamMembers from './components/Team/Team';

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
    <div className="App">
      <TeamForm addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

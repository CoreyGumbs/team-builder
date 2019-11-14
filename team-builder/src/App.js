import React, {useState} from 'react';
import './css/App.css';
import TeamForm from './components/Forms/TeamForm';
import TeamMembers from './components/Team/Team';

function App() {

  const [teamMembers, setTeamMembers] = useState([{
    name: 'John Doe',
    email: 'JDoe@test.com',
    role: 'Web Developer'
  }]);

  console.log(teamMembers);

  const handleFormChanges = e =>{
    setTeamMembers(...teamMembers, {
      name: e.target.value,
      email: e.target.value,
      role: e.target.value
    })
  }

  return (
    <div className="App">
      <TeamForm handleFormChanges={handleFormChanges} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

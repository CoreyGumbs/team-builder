import React, {useState, useEffect} from 'react';
import './css/App.css';
import TeamMembers from './components/Team/Team';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: 'John Doe',
    email: 'JDoe@test.com',
    role: 'Web Developer'
  }]);

  return (
    <div className="App">
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

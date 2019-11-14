import React, {useState} from 'react';
import './css/App.css';
import TeamForm from './components/Forms/TeamForm';
//import TeamMembers from './components/Team/Team';

function App() {

  const [teamMembers, setTeamMembers] = useState([{
    name: 'John Doe',
    email: 'JDoe@test.com',
    role: 'Web Developer'
  }]);

  return (
    <div className="App">
      <TeamForm />
      {/* <TeamMembers teamMembers={teamMembers} /> */}
    </div>
  );
}

export default App;

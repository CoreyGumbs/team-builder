import React, {useState, useEffect} from 'react';
import './css/App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: 'John Doe',
    email: 'JDoe@test.com',
    role: 'Web Developer'
  }]);

  return (
    <div className="App">
    
    </div>
  );
}

export default App;

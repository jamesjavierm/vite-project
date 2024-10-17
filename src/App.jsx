import './App.css';
import React, { useState } from 'react'; // Only import useState once

// Create an App component to render as our main component

import Form from './components/Form';
import Table from './components/Table';

function App() { 
  // all components have to return some jsx -- that's it
  const [links, setLinks] = useState([]);

  const addLink = (link) => {
    setLinks([...links, link]);
  }; 

  const [favLinks, setFavLinks] = useState([]);

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data]);
  };

  return (
    <div>
      <h1 className="testClass">Submit your fav links!</h1>

      <Form onNewSubmit={handleNewSubmission} /> 

      <Table links={favLinks} />  

    </div>
  );
}

export default App;

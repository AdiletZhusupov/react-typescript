import React from 'react';
import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

function App() {
/* First Tutorial
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {first: "Bruce", last: "Wayne"},
    {first: "Clark", last: "Kent"},
    {first: "Princess", last: "Diana"}
  ]
*/
  return (
    <div className="App">
      <Greet name="Adilet" isLoggedIn={true} />
      
      {/* First Tutorial 
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="error"/> */}
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Mario!!!</Heading>
      </Oscar>
    </div>
  );
}

export default App;

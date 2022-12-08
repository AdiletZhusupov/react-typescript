// import React, { useState } from 'react';
import './App.css';

//Tutorials 1-5
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

//Tutorials 6-10
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Container } from './components/Container';
// import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

function App() {
  /* Tutorials 1-5
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
  //Tutorials 6-10
  // const [inputValue, setInputValue] = useState("")
  return (
    <div className="App">
      
      {/*Tutorials 1-5 
      <Greet name="Adilet" isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="error"/> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Mario!!!</Heading>
      </Oscar> */}

      {/*Tutorials 6-10
      <Button handleClick={(e,id)=>console.log(e, id)}/>
      <Input value={inputValue} handleChange={(e)=> setInputValue(e.target.value)}/> 
      <Container styles={{border: '1px solid red', padding: '1rem'}}/> 
      <LoggedIn/>*/}
      <User/>
    </div>
  );
}

export default App;

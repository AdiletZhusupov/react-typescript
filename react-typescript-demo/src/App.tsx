// import React, { useState } from 'react';
import "./App.css";

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
// import { User } from "./components/state/User";

//Tutorials 11-15
// import { Counter } from "./components/state/Counter";
// import { Box } from "./components/context/Box";
// import {ThemeContextProvider} from "./components/context/ThemeContext"
// import { UserContextProvider } from "./components/context/UserContext";
// import { User } from "./components/context/User";

//Tutorials 16-20
// import { DomRef } from "./components/refs/DomRef";
// import { MutableRef } from "./components/refs/MutableRef";
// import { Counter } from "./components/class/Counter";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
// import { List } from "./components/generics/List";
// import { RandomNumber } from "./components/restriction/RandomNumber";


//Tutorials 21-25
// import { Toast } from "./components/templateliterals/Toast";
// import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

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
      <LoggedIn/>
      <User/>*/}

      {/* Tutorials 11-15
      <Counter />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>*/}

      {/* Tutorials 16-20
      <DomRef/>
      <MutableRef/>
      <Counter message="The count value is"/>
      <Private isLoggedIn={false} Component={Profile}/>
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)}/>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}/>
      <List items={[{id: 1, first: 'Bruce', last: 'Wayne'},{id: 2, first: 'Clark', last: 'Kent'},{id: 3, first: 'Princess', last: 'Diana'}]} onClick={(item) => console.log(item)}/>
      <RandomNumber value={10} isPositive/>*/}
      
      
      {/* Tutorials 21-25
      <Toast position='center'/>
      <CustomButton variant="primary" onClick={()=> console.log("clicked")}>Primary Button</CustomButton>*/}
    <Text as='h1' size='lg'>Heading</Text>
    <Text as='p' size='md'>Paragpraph</Text>
    <Text as='label' htmlFor='someId' size='lg' color='secondary'>Label</Text>
    </div>
  );
}

export default App;

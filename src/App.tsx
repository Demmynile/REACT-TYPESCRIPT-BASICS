import React from 'react';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';
import Demola from './Components/Demola';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import { Button } from './Components/Button';








function App() {

  const person = {
    firstname : "balogun",
    lastname : "ademola"
  }

  const nameList = [
    {
      first : 'demola',
      last : 'balogun'
    },
    {
      first : 'kehinde',
      last : 'kala'
    },
    {
      first : 'taiwo',
      last : 'mala'
    },
    {
      first : 'idowu',
      last : 'sala'
    }
  ]

  
   let name = 'loading'

   const handleClick = () => {
       return console.log("am so good")
   }

  return (
    <div className="App">
      <Demola name = 'Demola'  isLoggedIn={true}  />
      <Person  name = {person}/>
      <PersonList name = {nameList} /> 
      <Status status = {name}  />
      <Oscar>
      <Heading> Placeholder Text</Heading>
      </Oscar>
      <Button handleClick={handleClick}></Button>
    </div>
  );
}

export default App;

import React from 'react';
import { Counter } from './Components/Counter';

import {Box} from './Components/context/Box'
import { UserContextProvider } from './Components/context/UserContext';
// import { User } from './Components/state/User';
// import { LoggedIn } from './Components/state/LoggedIn';
// import { Heading } from './Components/Heading';
// import { Oscar } from './Components/Oscar';
// import { Status } from './Components/Status';
// import Demola from './Components/Demola';
// import Person from './Components/Person';
// import PersonList from './Components/PersonList';
// import { Button } from './Components/Button';
// import { Input } from './Components/Input';
// import { Container } from './Components/Container';











function App() {

  // const person = {
  //   firstname : "balogun",
  //   lastname : "ademola"
  // }

  // const nameList = [
  //   {
  //     first : 'demola',
  //     last : 'balogun'
  //   },
  //   {
  //     first : 'kehinde',
  //     last : 'kala'
  //   },
  //   {
  //     first : 'taiwo',
  //     last : 'mala'
  //   },
  //   {
  //     first : 'idowu',
  //     last : 'sala'
  //   }
  // ]

  
  //  let name = 'loading'

  



  return (
    <div className="App">
<UserContextProvider>
        <Box/>
        <Counter />
</UserContextProvider>
      {/* <Demola name = 'Demola'  isLoggedIn={true}  />
      <Person  name = {person}/>
      <PersonList name = {nameList} /> 
      <Status status = {name}  />
      <Container styles={{padding : '2rem' , border : '1px solid black' , }} />
      <Oscar>
      <Heading> Placeholder Text</Heading>
      </Oscar>
      <Button handleClick={(event , id) => {
        console.log('Button clicked' , event , id)
      }}></Button>
      <Input  handleChange={(e) => {
        console.log(e)
      }} value = '' /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}

    </div>
  );
}

export default App;

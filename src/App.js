import React, { useState } from 'react';
import UseEffectHook from './UseEffectHook';
import Display from './Display';

import SuspenseData from './SuspenseData';

// React 18
// react-router-dom 6

const App = () => {
  // [state variable, method to update it]
  //destructuring of array
  const [firstName, setFirstName] = useState('alina');
  const [age, setAge] = useState(20);
  const [arr, setArr] = useState([23, 90, 78, 78]);
  const [strOrNum, setStrOrNum] = useState(90);
  const [person, setPerson] = useState({
    name: 'alex',
    age: 30
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const [employee, setEmployee] = useState([{
    id: 1,
    designation: 'developer',
    username: 'NJFN'
  }, {
    id: 2,
    designation: 'HR',
    username: 'nhjfk'
  }, {
    id: 3,
    designation: 'Finance manager',
    username: 'kjrhfk'
  }]);

  const handleClick = () => {
    setFirstName('harry');
    setAge(35);
    setPerson({
      ...person, age: 50
    });

    setArr([...arr, 90, 100]);

    const updatedArray = [...employee];
    updatedArray[1].username = 'Hello';
    setEmployee(updatedArray);
  }

  return (
    <>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{arr.map(data => data)}</p>

      {employee.map(emp => {
        return (
          <React.Fragment key={emp.id}>
            <p> {emp.username}</p>
            <p>{emp.designation}</p>
          </React.Fragment>
        )
      })}
      
      <button onClick={() => setFirstName('harry')}>Update string</button>
      <button onClick={() => setAge(35)}>Update Number</button>
      <button onClick={() => setPerson({
        ...person, age: 50
      })}>Update Object</button>

      <button onClick={() => setArr([...arr, 90, 100])}>Update Array</button>

      <button onClick={handleClick}>Update</button>

      <h3>UseEffect Data</h3>
      <SuspenseData />

      <h3>Prop Validation</h3>
      <Display firstName={firstName} age={age} strOrNum={strOrNum} arr={arr} employee={employee} />
    </>
  )
}



export default App;



//es6 destrcuturing of array
// const arr = [90, 78, 80];
// const [a, b, c] = arr;
// console.log(a, b, c);






// https://codesandbox.io/s/react-life-cycle-methods-withexamples-cdtey?from-embed=&file=/src/components/Updating/componentDidUpdateMethod.js
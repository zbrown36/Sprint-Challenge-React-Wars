import React, {useEffect, useState } from 'react';
import './App.css';
import axios from"axios";
import CharacterCard from "./components/Character";

const App = () => {
  const [data, setData] = useState([{}]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(function (response) {
      console.log(response.data.results);
      setData(response.data.results)
    })
  }, ["https://swapi.py4e.com/api/people/"]);

  return (
    <div className="App">
      <h1 className="header">Star Wars Characters</h1>
      {data.map(function(item, index) {
        console.log(CharacterCard)
        return <CharacterCard name={item.name} height={item.height} weight={item.mass} homeworld={item.homeworld} key={index} />
      })}
    </div>
  );  
  }

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App" >

        <select onChange = {changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map((pokemon)=>{
            return(
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );

          })}

        </select>
    {pokeName && <PokeCard pokeName = {pokeName}/>}
    </div>
  );
}

export default App;
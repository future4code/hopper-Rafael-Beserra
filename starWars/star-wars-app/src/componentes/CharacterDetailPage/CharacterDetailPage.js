import React, { useState, useEffect } from "react";
import { getCheracter, getPlanet } from "../../services/customHooksCharacter";

const CharacterDetailPage = (props) => {
    const [character, setCharacter] = useState({});
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        getCheracter(props.url, setCharacter)
    }, [props.url]);

    useEffect(() => {
        getPlanet(character.homeworld, setPlanet)
    }, [character.homeworld])

    return(
        <div>
            <h1>Character Detail Page</h1>
            {character.name && planet.name ? 
                <div>
                    <p>Nome: {character.name}</p>
                    <p>Planeta de origem: {planet.name}</p>
                </div> : 
                <p> Carregando ...</p>
            }
                {/* <p>Nome: {character.name}</p>
                <p>Planeta de origem: {planet.name}</p> */}
            <button onClick={props.goTListlPage}> Back to character list</button>
        </div>
    );
};

export default CharacterDetailPage;
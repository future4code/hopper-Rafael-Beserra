import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerCharacter } from './style';
import { BASE_URL } from "../../constants/urls";


const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([]);

    function getCharacterList() {
        axios.get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.messege))
    };

    useEffect(() => {
        getCharacterList()
    }, []);

    function onlyCharacter(){
        return characterList.map((characters, index) => {
            return <ContainerCharacter key={index}>{characters.name}</ContainerCharacter>
        })
    };

    return(
        <div>
            <h1>Lista de personagens</h1>
            {onlyCharacter()}
        </div>
    );
    
};

export default CharacterListPage;
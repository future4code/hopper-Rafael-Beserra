import React, {useState, useEffect} from "react";
import axios from "axios";
import { ContainerCharacter } from "./styled"
import {BASE_URL} from "../../constants/urls";
import { getCharacterList } from "../../services/customHooksCharacter";

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([]);

    // transformado em global
    // function getCharacterList() {
    //     axios.get(`${BASE_URL}/people/`)
    //     .then((response) => setCharacterList(response.data.results))
    //     .catch((error) => console.log("Erro:", error.messege))
    // };


    console.log(characterList);
    useEffect(() => {
        getCharacterList(setCharacterList)
    }, []);

    function onlyCharacter(){
        return characterList.map((characters, index) => {
                return  (<ContainerCharacter onClick={() => {props.goToDetailPage(characters.url)} } key={index}>{characters.name}</ContainerCharacter>);
            })
    };

    return (
        <div>
            <h1>Character List Page</h1>
            {onlyCharacter()}

        </div>
    )
}

export default CharacterListPage;
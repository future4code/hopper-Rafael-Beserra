import axios from "axios";
import { useEffect, useState } from "react";
import { URL_PLANETS } from "../../constants/urls";
import { getPlanet } from "../../services/customHooksCharacter";
import { getPlanetList } from "../../services/HookToPlanets";
import { ContainerPlanets } from "./styled";



const PlanetsListPage = (props) => {
    const [listPlanets, setListPlanets] = useState([]);

    // const getPlanetList = () => {
    //     axios.get(URL_PLANETS)
    //     .then((res) => setListPlanets(res.data.results))
    // }
    
    useEffect(() => {
        getPlanetList(setListPlanets);
    }, [])

    console.log(listPlanets);
    
    function onlyPlanets(){
        return listPlanets.map((planets, index) => {
            return (<ContainerPlanets onClick={() => {props.goToDetailplanets(planets.url)}} key={index}>{planets.name}</ContainerPlanets>);
        })
    }

    return(
        <div>
            <h1>List Planets</h1>
            {onlyPlanets()}
        </div>
    )
}

export default PlanetsListPage;
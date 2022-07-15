import React, {useState} from "react";
import PlanetsDetailsPage from "../PlanetsDetailsPage/PlanetsDetailsPage";
import PlanetsListPage from "../PlanetsListPage/PlanetsListPage";

function PlanetsOptions() {
    const [currentPagePlanets, setCurrentPagePlanets] = useState("list");
    const [detailsUrlplanets, setDetailsUrlPlanets] = useState("");
    
    function goToDetailplanets(url) {
        setCurrentPagePlanets("details")
        setDetailsUrlPlanets(url)
    }
  
    function goTListlplanets() {
        setCurrentPagePlanets("list")
    }
  
  
    function selectPagepPlanets() {
      if (currentPagePlanets === "list") {
        return <PlanetsListPage goToDetailplanets={goToDetailplanets}/>
        // <PlanetsListPage goToDetailplanets={goToDetailplanets}/>
        // <CharacterListPage goToDetailPage={goToDetailplanets}/>
      }
      else {
        return <PlanetsDetailsPage goTListlplanets={goTListlplanets} url={detailsUrlplanets}/>
        // <CharacterDetailPage goTListlPage={goTListlplanets} url={detailsUrl}/>
      }
    };

    return(
        <div>
            {selectPagepPlanets()}
        </div>
    );
};

export default PlanetsOptions;
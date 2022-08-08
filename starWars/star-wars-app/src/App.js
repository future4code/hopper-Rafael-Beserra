import React, {useState} from "react";
import CharacterDetailPage from "./componentes/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./componentes/CharacterListPage/CharacterListPage";
import PlanetsListPage from "./componentes/PlanetsListPage/PlanetsListPage";
import PlanetsDetailsPage from "./componentes/PlanetsDetailsPage/PlanetsDetailsPage";

import './APP.css';
import CharacterOptions from "./componentes/CharacterOptions/CharacterOptions";
import PlanetsOptions from "./componentes/PlanetsOptions/PlanetsOptions";
// import Router from "./Routes/Routes";

function App() {
  // const [currentPage, setCurrentPage] = useState("list");
  // const [detailsUrl, setDetailsUrl] = useState("");
  // const [currentPagePlanets, setCurrentPagePlanets] = useState("list");
  // const [detailsUrlplanets, setDetailsUrlPlanets] = useState("");

  
  // function goToDetailPage(url) {
  //   setCurrentPage("details")
  //   setDetailsUrl(url)
  // }

  // function goTListlPage() {
  //   setCurrentPage("list")
  // }
  
  // function goToDetailplanets(url) {
  //   setCurrentPagePlanets("details")
  //   setDetailsUrlPlanets(url)
  // }

  // function goTListlplanets() {
  //   setCurrentPagePlanets("list")
  // }

  // function selectPage() {
  //   if (currentPage === "list") {
  //     return <CharacterListPage goToDetailPage={goToDetailPage}/>
  //   }
  //   else {
  //     return <CharacterDetailPage goTListlPage={goTListlPage} url={detailsUrl}/>
  //   }
  // };

  // function selectPagepPlanets() {
  //   if (currentPagePlanets === "list") {
  //     return <PlanetsListPage goToDetailplanets={goToDetailplanets}/>
  //     // <CharacterListPage goToDetailPage={goToDetailplanets}/>
  //   }
  //   else {
  //     return <PlanetsDetailsPage goTListlplanets={goTListlplanets} url={detailsUrlplanets}/>
  //     // <CharacterDetailPage goTListlPage={goTListlplanets} url={detailsUrl}/>
  //   }
  // };


  // function homepage() {
  //   return selectPagepPlanets()
  // };


  return (
    <div className="App">
      <h1> O que deseja pesuisar?</h1>
      <div className="listas">
        <div>{CharacterOptions()}</div>
        <div>{PlanetsOptions()}</div>
        
        {/* <div>{selectPage()}</div> */}
        {/* <div>{homepage()}</div> */}
      </div>      
    </div>
  );
};

export default App;

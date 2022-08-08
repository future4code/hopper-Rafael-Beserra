import React, {useState} from "react";
import CharacterDetailPage from "../CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../CharacterListPage/CharacterListPage";

function CharacterOptions() {
  const [currentPage, setCurrentPage] = useState("list");
  const [detailsUrl, setDetailsUrl] = useState("");
  
  function goToDetailPage(url) {
    setCurrentPage("details")
    setDetailsUrl(url)
  }

  function goTListlPage() {
    setCurrentPage("list")
  }


  function selectPage() {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailPage={goToDetailPage}/>
    }
    else {
      return <CharacterDetailPage goTListlPage={goTListlPage} url={detailsUrl}/>
    }
  };


  return (
    <div className="App">
      {selectPage()}
    </div>
  );
};

export default CharacterOptions;
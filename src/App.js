import Home from "./components/Homescreen";
import SearchScreen from "./components/SearchScreen";
import {  Route, Routes, useNavigate } from "react-router-dom";
import { recognition } from "./api/voiceRecogination";
import React, { useState } from "react";
import { searchData } from "./api/googleSearch";
import { Navigate } from 'react-router-dom';
import VoiceSearch from "./components/VoiceSearch";

function App() {
  const navigate = useNavigate();
  const [searchTerm, getSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const [voiceSearch,setVoiceSearch] =useState(false);
  const setSearch = async (term) => {
    getSearchTerm(term);

    const data = await searchData(term);
    setGoogleData(data);
    console.log(data);

    navigate("/search");
  };

  const openVoiceSearch=()=>{
      setVoiceSearch(true);
      recognition.start();
      
      recognition.onresult = (event) => {
        const {transcript} = event.results[0][0];
        if(transcript !==null || transcript !== "" || transcript != " "){
        setVoiceSearch(false);
        
        setSearch(transcript);
        }
        else{
          setVoiceSearch(false);
          alert("please try again")
        }
      }
  }
  const closeVoiceSearch=()=>{
      setVoiceSearch(false);
      recognition.stop()
  }
  return (
    <div className="App">
    {
      voiceSearch?(<VoiceSearch closeVoiceSearch={closeVoiceSearch}/>):null
    }
    
      <Routes>
        <Route
          exact
          path={"/"}
          Component={() => <Home setSearch={setSearch}  openVoiceSearch={openVoiceSearch}/>}
        />
        {
          searchTerm !==""? (
        <Route
          exact
          path={"/search"}
          Component={() => (
            <SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData}openVoiceSearch={openVoiceSearch} />
          )}
        />):null
        }
        

        <Route path="/search" element={ <Navigate to="/" /> } />
      </Routes>
    </div>
  );
}

export default App;

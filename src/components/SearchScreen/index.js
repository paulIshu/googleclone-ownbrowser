import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import Header from './Header';
import SearcheData from './SearcheData';

const SearchScreen = ({searchTerm ,googleData,setSearch,openVoiceSearch}) => {
    const navigate = useNavigate();
    console.log(googleData);
    useEffect(()=>{
        if(searchTerm===''){
            navigate('/');
    }
    },[searchTerm]);
  return (
    <>
    <Header searchTerm ={searchTerm} setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>
    <div className="container">
      <div className="row">
      <SearcheData googleData={googleData}/>

      </div>
    </div>
    </>
  );
};

export default SearchScreen;

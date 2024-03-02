import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchHeader = ({ searchTerm ,setSearch ,openVoiceSearch}) => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setSearchText(searchTerm);
  }, [searchTerm]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(searchText) ||
      /^[a-zA-Z0-9]+[" "]/.test(searchText) 
    ) {
      setSearch(searchText);
    }
  };
  const handleButton = () => {
    
    if (
      /^[a-zA-Z0-9].*/.test(searchText) ||
      /^[a-zA-Z0-9]+[" "]/.test(searchText) 
    ) {
      setSearch(searchText);
    }
  };
  const setClear =()=>{
    setSearchText('');
  }
  return (
    <div className="col-md-12 py-3 d-flex align-items-center pe-5">
      <Link to={"/"} className="mx-4">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          height="30"
        />
      </Link>
      <div className="col-md-5 d-flex  ml-2 align-items-center justify-content-evenly border">
        <form style={{ width: "87%" }} onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            className="form-control border-0 mr-2"
            onChange = {(e)=>setSearchText(e.target.value)}
            style={{ outline: "none", boxShadow: "none" }}
          />
        </form>
        {searchText ? <i className="fa fa-times pe-2" style={{cursor:'pointer'}} onClick={setClear}></i> : null}
        <i className="fa fa-microphone pe-2" onClick={openVoiceSearch} style={{cursor:'pointer'}}  ></i>
        <i className="fa fa-search mr-2 pe-2" style={{cursor:'pointer'}} onClick={handleButton}></i>
      </div>
      <ul className="nav ms-auto mr-5">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa fa-th"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link " style={{color:"#000"}}>
                  <i className="fa fa-user-circle-o"></i>
                </a>
              </li>
            </ul>
    </div>
  );
};

export default SearchHeader;

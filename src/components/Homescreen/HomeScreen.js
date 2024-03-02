import { useState } from "react";
import React from "react";

const HomeScreen = ({ setSearch , openVoiceSearch }) => {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(input) ||
      /^[a-zA-Z0-9]+[" "]/.test(input) 
    ) {
      setSearch(input);
    }
  };
  const handleButton = () => {
    
    if (
      /^[a-zA-Z0-9].*/.test(input) ||
      /^[a-zA-Z0-9]+[" "]/.test(input) 
    ) {
      setSearch(input);
    }
  };
  const setClear =()=>{
    setInput('');
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12  d-flex flex-column  align-items-center justify-content-center  mt-5">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="mx-auto my-3"
          />
          <div className="formDiv col-md-5 mx-auto border my-5 d-flex align-items-center justify-content-between mx-2 my-2 ">
            <i className="fa fa-search ms-2"></i>
            <form action="" style={{ width: "100%" }} onSubmit ={handleSubmit}>
              <div className="form-group mx-3">
                <input
                  type="text"
                  className="form-control border-0"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  style={{
                    boxShadow: "none ",
                    outline: "none "
                  }}
                />
              </div>
            </form>
            {input ? <i className="fa fa-times" style={{cursor:"pointer"} } onClick={setClear}> </i> : null}
            <button type="button" className="btn" onClick={openVoiceSearch}role="button">
              <i className="fa fa-microphone" ></i>
            </button>
          </div>
          <div className="btns mx-auto text-center">
              <button
                type="button"
                className="btn btn-default mx-1"
                onClick={handleButton}
                
                
              >Google Search</button>
              
              <button
                type="button"
                className="btn btn-default mx-1"
                
              >I'm Feeling Lucky</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

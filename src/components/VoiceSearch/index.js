import React from "react";
import "./index.css";

const VoiceSearch = ({closeVoiceSearch}) => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center  voiceModal py-2">
      <div className="col-md-4 bg-light voice-search">
        <div className="border-bottom w-100 d-flex align-items-center justify-content-between">
            <h3>Voice Search</h3>
            <i className="fa fa-times px-2 " onClick={closeVoiceSearch} style={{color:'black'}}></i>
        </div>
        <div className="w-100 h-50 d-flex align-items-center justify-content-center">
            <div className="col-md-2  micIcon bg-danger d-flex align-items-center justify-content-center text-white">
                <i className="fa fa-microphone"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSearch;

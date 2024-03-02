import React from "react";
import Dataa from "./Dataa";

const SearcheData = ({ googleData }) => {
  

  return (
    <div className="col-md-12 p-5 ml-2">
      <p className="small text-dark">
        About {googleData.searchInformation.formattedTotalResults} results (
        {googleData.searchInformation.formattedSearchTime} seconds){' '}
      </p>

      {googleData.items.map((data, id) => (
        <Dataa key={id} data={data} />
      ))}
    </div>
  );
};

export default SearcheData;

import React from "react";
import CountryListItems from "./CountryListItems";

function CountryList({ countriesData, handleDelete, handleDeleteAll }) {
  return (
    <div className="countryList">
      <h3 className="visitList">i have plan to visit : </h3>
      <CountryListItems
        key={countriesData.id}
        countriesData={countriesData}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  );
}

export default CountryList;

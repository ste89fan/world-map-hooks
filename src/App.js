import React, { useState } from "react";
import { VectorMap } from "react-jvectormap";
import Title from "./components/Title";
import Button from "./components/Button";
import CountryList from "./components/CountryList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const countries = [
  {
    id: "002",
    name: "Serbia",
  },
];

const App = () => {
  const { getData } = require("country-list");

  const [countriesData, setCountriesData] = useState(countries);

  const [name, setName] = useState("");

  const handleClick = (e, countryCode) => {
    let tempCountry = getData().find((item) => item.code === countryCode);
    setName(tempCountry.name);
  };

  const handleAddToList = (e) => {
    e.preventDefault();
    const countryObj = { id: uuidv4(), name };
    setCountriesData([...countriesData, countryObj]);
  };

  const handleDelete = (id) => {
    let tempDel = countriesData.filter((item) => item.id !== id);
    setCountriesData(tempDel);
  };

  const handleDeleteAll = () => {
    setCountriesData([]);
  };

  return (
    <>
      <div className="titleField">
        <Title title="double click on target country to mark" />
      </div>
      <div className="worldMap">
        <VectorMap
          map={"world_mill"}
          backgroundColor="blue" //change it to ocean blue: #0077be
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "520px",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 2.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "orange ", //color for the clicked country
            },
          }}
          regionsSelectable={true}
          regionsSelectableOne={true}
          series={{
            regions: [
              {
                values: countries,
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </div>
      <div className="titleField">
        <Title title={`your choice is : ${name}`} />
        {name.length > 0 ? (
          <Button id="addToList" handleAddToList={handleAddToList} />
        ) : null}
      </div>
      <div>
        <CountryList
          countriesData={countriesData}
          handleDelete={handleDelete}
          handleDeleteAll={handleDeleteAll}
        />
      </div>
    </>
  );
};

export default App;

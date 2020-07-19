import React from "react";

function CountryListItems({ countriesData, handleDelete, handleDeleteAll }) {
  return (
    <>
      <div>
        {countriesData.map((item) => (
          <div className="divItem" key={item.id}>
            <p>Country name : </p>
            <div className="itemName">{item.name}</div>
            <div className="btnDelete">
              <button onClick={() => handleDelete(item.id)}>
                Delete this item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="deleteAll">
        {countriesData.length > 0 ? (
          <button onClick={handleDeleteAll}>Delete All</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CountryListItems;

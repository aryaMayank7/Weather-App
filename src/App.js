import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=94b356dd9c6f53cdb359686ca4d7c0b1`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              const name = event.target.name;
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No DATA FOUND</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

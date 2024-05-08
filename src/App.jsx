import React, { useState } from "react";
import "./App.css";
import data from "./countryData.json"; // corrected import statement

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    // You can add search functionality here if needed
  };

  return (
    <div className="App">
      <h1>Search</h1>
      <div className="search">
        <div className="search-inside">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}>Search</button>
        </div>
        <div className="downdrop">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullname = item.name.toLowerCase();
              return searchTerm && fullname.startsWith(searchTerm);
            })
            .map((item) => (
              <div className="row-dropdown" key={item.id}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

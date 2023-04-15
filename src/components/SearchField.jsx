import { useState } from "react";
import "../styles/SearchField.css";
import { UilSearch } from "@iconscout/react-unicons";

export default function SearchField({ setQuery }) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="search-field-container">
      <label htmlFor="search-field">Search Field</label>
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text"
        name=""
        id="search-field"
        placeholder="Enter city name..."
      />
      <UilSearch size={25} className="search-icon" onClick={handleClick} />
    </div>
  );
}

import "./App.css";
import SearchField from "./components/SearchField";
import TimeAndLocation from "./components/TimeAndLocation";
import Temperature from "./components/Temperature";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [weather, setWeather] = useState(null);
  const unit = "metric";

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, unit }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);


  return (
    <div className="App">
      <SearchField setQuery = {setQuery} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <Temperature weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;

import { formatToLocalTime } from "../services/weatherService";
import "../styles/TimeAndLocation.css"

export default function TimeAndLocation({ weather: { dt, timezone, name, country } }){
  return(
    <div className="time-location-container">
      <div className="time-container">
        <p className="time">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="location-container">
        <p className="location">
        {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}
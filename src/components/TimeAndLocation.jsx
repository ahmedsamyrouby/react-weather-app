import "../styles/TimeAndLocation.css"

export default function TimeAndLocation(){
  return(
    <div className="time-location-container">
      <div className="time-container">
        <p className="time">
          Tuesday, 31 May 2022 | Local time: 12:46 PM
        </p>
      </div>
      <div className="location-contai">
        <p className="location">
          Berlin, DE
        </p>
      </div>
    </div>
  );
}
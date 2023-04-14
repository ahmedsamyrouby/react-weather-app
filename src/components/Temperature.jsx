import '../styles/Temperature.css'

export default function Temperature(){
  return(
    <div>
      <div className="temp-status">
        <p>Rain</p>
      </div>
      <div className="temp-num">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p className="temp-value">34 &#8451;</p>
      </div>
    </div>
  );
}
import { iconUrlFromCode } from '../services/weatherService';
import '../styles/Temperature.css'

export default function Temperature({weather: {
  details, icon, temp
}}){
  return(
    <div>
      <div className="temp-status">
        <p>{details}</p>
      </div>
      <div className="temp-num">
        <img src={iconUrlFromCode(icon)} alt="" />
        <p className="temp-value">{parseInt(temp)} &#8451;</p>
      </div>
    </div>
  );
}
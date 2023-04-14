import '../styles/SearchField.css'
import { UilSearch } from '@iconscout/react-unicons';

export default function SearchField(){
  return(
    <div className="search-field-container">
      <label htmlFor="search-field">Search Field</label>
      <input type="text" name="" id="search-field" placeholder='Enter city name...'/>
      <UilSearch size={25} className="search-icon"/>
    </div>
  );
}
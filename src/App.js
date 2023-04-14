import "./App.css";
import SearchField from './components/SearchField';
import TimeAndLocation from './components/TimeAndLocation';
import Temperature from './components/Temperature'


function App() {
  return (
    <div className="App">
        <SearchField />

        <TimeAndLocation />
        <Temperature />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json().then((data) => setCountries(data))
    );
  }, []);
  return (
    <div>
      <h1>Visiting Countries...</h1>
      <h3>Country Available Countries: {countries.length}</h3>
      <div className="container">
      {
        countries.map(country=> <Country name ={country.name.common} population ={country.population} flag ={country.flags.svg} key={Math.random(1)*300}></Country>)
      }
      </div>
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <div className="all-country">
      <div className="country">
      <img src={props.flag} alt={props.name} />
      <h1>Name : {props.name}</h1>
      <p>Population : {props.population}</p>
      </div>
    </div>
    </div>
  );
}

export default App;

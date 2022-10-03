import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./components/CardResident";
import ErrorScreen from "./components/ErrorScreen";
import FilterList from "./components/FilterList";
import Location from "./components/Location";
import getRamdomNumber from "./utils/getRamdomNumber";
import banner from "../public/img/66133.jpg";

function App() {
  //para guardar location
  const [location, setLocation] = useState();
  //para guardar informacion del input y hacer peticion cuando se hace submit
  const [searchInput, setSearchInput] = useState("");
  //para guardar las sugerencia de la api
  const [suggestedList, setSuggestedList] = useState();
  //estado para el error y verificar si hay o no error
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let id = getRamdomNumber();
    if (searchInput) {
      id = searchInput;
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setHasError(false), setLocation(res.data);
      })
      .catch((err) => setHasError(true));
  }, [searchInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.idLocation.value);
  };

  const handleChange = (event) => {
    //vuelve su estado a vacio para que no arroje resultado estando vacio
    if (event.target.value === "") {
      return setSuggestedList();
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`;
    axios
      .get(URL)
      .then((res) => setSuggestedList(res.data.results))
      .catch((err = console.log(err)));
  };

  return (
    <div className="App">
      <header className="card__header">
        <img src={banner} alt="" />

        <form onSubmit={handleSubmit} className="card__form">
          <input
            type="text"
            name=""
            id="idLocation"
            placeholder="Enter anohter number for 1-126"
            onChange={handleChange}
          />
          <button className="btn__search">Search</button>
          <FilterList
            suggestedList={suggestedList}
            setSearchInput={setSearchInput}
          />
        </form>
      </header>

      {hasError ? (
        <ErrorScreen />
      ) : (
        <>
          {" "}
          <Location location={location} />
          <div className="card-container">
            {location?.residents.map((url) => (
              <CardResident key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

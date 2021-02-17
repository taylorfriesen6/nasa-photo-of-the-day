import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./App.css";

import InfoCard from "./InfoCard.js";

function App() {
  const [data, setData] = useState({});
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=7tMbzFwnoMa0dua93R3O4zh4M9ctDWp4vBEAikcQ")
      .then(res => setData(res.data))
      .catch(_ => setNetworkError(true));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      {!networkError ? <InfoCard data={data}/> : <p>Sorry, the photo couldn't be retrieved :(</p>}
    </div>
  );
}

export default App;

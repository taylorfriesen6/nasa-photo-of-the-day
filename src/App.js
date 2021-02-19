import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

import "./App.css";

import InfoCard from "./InfoCard.js";

import { API_KEY } from "./constants";


const StyledApp = styled.div`
  background-color: #2F2F3F;
  color: #FFD700;
  p {
    margin: 1em 20%;
  }
`;

function App() {
  const [data, setData] = useState({});
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => setData(res.data))
      .catch(_ => setNetworkError(true));
  }, []);

  return (
    <StyledApp>
      <div className="App">
        <h1>NASA Photo of the Day</h1>
        {!networkError ? <InfoCard data={data}/> : <p>Sorry, the photo couldn't be retrieved :(</p>}
      </div>
    </StyledApp>
  );
}

export default App;

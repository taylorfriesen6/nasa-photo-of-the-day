import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

// example call: https://api.nasa.gov/planetary/apod?api_key=7tMbzFwnoMa0dua93R3O4zh4M9ctDWp4vBEAikcQ

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=7tMbzFwnoMa0dua93R3O4zh4M9ctDWp4vBEAikcQ")
      .then(res => setData(res.data));
  }, []);

  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

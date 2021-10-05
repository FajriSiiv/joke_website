import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const TampilkanJokes = () => {
  const [jokeVal, setjokeVal] = useState("");
  const { id } = useParams();
  function categoryAPI() {
    axios({
      method: "get",
      url: `https://api.chucknorris.io/jokes/${id}`
    })
      .then(res => {
        setjokeVal(res.data.value);
      })
      .catch(e => console.log("error", e));
  }
  categoryAPI();
  return (
    <div>
      <h1>Search : </h1>
      <h1>Joke Chuck Norris - {jokeVal} </h1>
    </div>
  );
};

export default TampilkanJokes;

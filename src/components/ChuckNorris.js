import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ChuckNorris = () => {
  const [searcVal, setSearcVal] = useState("");
  const [categoriJoke, setcategoriJoke] = useState("");

  const [tampilkan, setTampilkan] = useState([]);
  const [optional, setOptional] = useState([]);

  const [btnClick, setBtnClick] = useState(true);

  function handleClick(e) {
    // e.preventDefault();
    CategoryAPI();
    JokeAPI();
  }

  function JokeAPI() {
    let isMounted = true;
    axios({
      method: "get",
      url: `https://api.chucknorris.io/jokes/search?query=${searcVal}`
    })
      .then(res => {
        setTampilkan(res.data.result);
      })
      .catch(e => console.log("error", e));

    return () => {
      isMounted = false;
    };
  }
  function CategoryAPI() {
    let isMounted = true;
    axios({
      method: "get",
      url: `https://api.chucknorris.io/jokes/random?category=${categoriJoke || "animal"}`
    })
      .then(res => {
        setOptional(res.data);
        console.log(res.data);
      })
      .catch(e => console.log("error", e));
    return () => {
      isMounted = false;
    };
  }

  function OptValue() {
    return <div>{optional.value}</div>;
  }
  function GetSearch() {
    return (
      <div>
        {tampilkan.map(e => (
          <Link to={e.id} key={e.id}>
            <div>
              <h5>{e.value}</h5>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      <div>
        <input type="text" value={searcVal} onChange={e => setSearcVal(e.target.value)} />
        <button
          onClick={e => {
            handleClick();
            setBtnClick(false);
          }}
        >
          Search Joke
        </button>
      </div>
      {btnClick == true ? <OptValue /> : <GetSearch />}
      <div>
        <button
          value="animal"
          onClick={e => {
            handleClick();
            setBtnClick(true);
          }}
        >
          Search
        </button>
        <select onChange={e => setcategoriJoke(e.target.value)}>
          <option value="animal">Animal</option>
          <option value="career">Career</option>
          <option value="celebrity">Celebrity</option>
          <option value="dev">Dev</option>
          <option value="explicit">Explicit</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="history">History</option>
          <option value="money">Money</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="political">Political</option>
          <option value="religion">Religion</option>
          <option value="science">Science</option>
          <option value="sport">Sport</option>
          <option value="travel">Travel</option>
        </select>
      </div>
    </div>
  );
};

export default ChuckNorris;

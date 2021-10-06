import axios from "axios";
import React, { useState } from "react";
import ChuckIMG from "../images/chucknorris.png";
import "../styles/app.scss";
import { motion } from "framer-motion";
const ChuckNorris = () => {
  const [searcVal, setSearcVal] = useState("");
  const [categoriJoke, setcategoriJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [tampilkan, setTampilkan] = useState([]);
  const [optional, setOptional] = useState([]);
  const [btnClick, setBtnClick] = useState(false);

  function handleClick(e) {
    // e.preventDefault();
    CategoryAPI();
    JokeAPI();
  }

  async function JokeAPI() {
    setLoading(true);
    axios({
      method: "get",
      url: await `https://api.chucknorris.io/jokes/search?query=${searcVal}`
    })
      .then(res => {
        setTampilkan(res.data.result);
        setLoading(false);
      })
      .catch(e => {
        console.log(e, "error");
      });
  }
  async function CategoryAPI() {
    setLoading(true);

    axios({
      method: "get",
      url: await `https://api.chucknorris.io/jokes/random?category=${categoriJoke || "animal"}`
    })
      .then(res => {
        setOptional(res.data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function OptValue() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-2 border-2 mt-2 mb-2 "
      >
        <h4>{optional.value}</h4>
      </motion.div>
    );
  }

  function GetSearch() {
    return (
      <div>
        <h4 className="text-base font-medium ">
          {tampilkan.map(e => (
            <motion.div key={e.id} className="p-2 border-2 mt-2 mb-2">
              <h5>{e.value}</h5>
            </motion.div>
          ))}
        </h4>
      </div>
    );
  }

  function ReadyGet() {
    return btnClick == false ? <GetSearch /> : <OptValue />;
  }

  return (
    <div
      animate={{
        transform: ["translateX(-50%)", "translateX(0)"]
      }}
      className=" w-full h-100vh chuck-div"
    >
      <div className="w-full bg-yellow-400 p-1 pt-4 pb-4 flex flex-col mr-5">
        <div className="mb-5 mx-auto">
          <div className="judul mb-2 text-center">
            <h1 className="text-3xl">Chuck Norris Joke</h1>
            <img src={ChuckIMG} className="w-44 h-32 m-auto " />
          </div>
          <div className="flex flex-row items-center gap-1">
            <input
              className="border-2 p-1 w-56 border-yellow-600"
              type="text"
              value={searcVal}
              onChange={e => setSearcVal(e.target.value)}
            />
            <button
              className=" transition duration-300 ease-out pt-1 pb-1 pl-4 pr-4 border-2 w-fitC break-words hover:text-white hover:bg-green-500 hover:border-2 hover:border-green-200"
              onClick={e => {
                handleClick();
                setBtnClick(false);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-1 flex-row items-center mx-auto">
          <select
            onChange={e => setcategoriJoke(e.target.value)}
            className="p-1 border-2 w-56 break-words"
          >
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
          <button
            className="transition duration-300 ease-out pt-1 pb-1 pl-4 pr-4 border-2 w-fitC break-words hover:text-white hover:bg-green-500 hover:border-2 hover:border-green-200"
            value="animal"
            onClick={e => {
              handleClick();
              setBtnClick(true);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <motion.div className="w-full overflow-y-scroll pl-4 pr-4 pt-2 pb-2 ">
        <h2 className="text-2xl "> The Joke : </h2>
        {loading ? "Loading" : <ReadyGet />}
      </motion.div>
    </div>
  );
};

export default ChuckNorris;

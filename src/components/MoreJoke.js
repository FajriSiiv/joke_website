import React, { useState } from "react";

const MoreJokes = () => {
  const [tampilkan, setTampilkan] = useState([]);
  console.log(tampilkan[0]);
  return (
    <div>
      <h1>{tampilkan[0].value}</h1>
    </div>
  );
};

export default MoreJokes;

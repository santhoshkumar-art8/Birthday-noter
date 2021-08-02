import React, { useState } from "react";

function App() {
  let [item, setitem] = useState("");
  let [arrcode, setarrcode] = useState([]);
  function itemfun(event) {
    let a = event.target.value;
    setitem(a);
  }
  function fullfun() {
    setarrcode(function (prev) {
      return [...prev, item];
    });
    setitem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>Birthday-noter</h1>
      </div>
      <div className="form">
        <input onChange={itemfun} value={item} type="text" />
        <button onClick={fullfun}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrcode.map((eachitem) => (
            <li>{eachitem}</li>
          ))}
        </ul>
      </div>
      <p>2021 @ santhosh kumar</p>;
    </div>
  );
}

export default App;

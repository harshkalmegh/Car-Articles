// @ts-check

import React from "react";
import data from "./data";

import { Link } from "react-router-dom";

function App() {
  console.log(data);
  return (
    <div>
      <div>
        <h1>Car Articles</h1>
      </div>
      <div>
        {data.map((val) => {
          return (
            <Link key={val.key} to={`/${val.key}`} state={val}>
              <div className="articlesContainer">
                <h4>{val.key}).</h4>
                <img src={val.img} alt="img" width="150px" />
                <h4>{val.title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default App;

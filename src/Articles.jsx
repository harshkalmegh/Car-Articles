import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Articles() {
  const val = useLocation().state;

  return (
    <div className="articles">
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <div>
        <h1>{val.title}</h1>
      </div>
      <div>
        <img src={val.img} alt="img" />
        <p>{val.description}</p>
      </div>
    </div>
  );
}

export default Articles;

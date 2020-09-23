import React from "react";
import { Link } from "react-router-dom";

function NoData() {
  return (
    <div className="container">
      <div
        className="card"
        style={{
          width: "50rem",
          float: "left",

          marginTop: "30px",
        }}
      >
        <img
          className="card-img-top"
          src="https://res.cloudinary.com/doi3x39cn/image/upload/v1600860280/fafh2tqzahvjapshwne6.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text"></p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link to="/Add" className="btn btn-primary">
              Add Book Listing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoData;

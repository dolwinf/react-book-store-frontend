import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#799bf7" }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "Lobster, cursive",
            fontSize: "50px",
            color: "white",
          }}
        >
          Book Attic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/Add"
                style={{
                  marginLeft: "50px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Add Book Listing
              </Link>
            </li>
            {/* <li className="nav-item active">
              <Link to="/Wishlist" className="nav-link">
                WishList<span className="sr-only">(current)</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navBar;

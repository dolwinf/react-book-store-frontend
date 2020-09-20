import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="" className="navbar-brand">
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
            <li className="nav-item active">
              <Link to="/Add" className="nav-link">
                Add Book Listing <span className="sr-only">(current)</span>
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

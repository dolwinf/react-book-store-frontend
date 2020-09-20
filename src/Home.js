/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
function Home() {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pure-bastion-33744.herokuapp.com/api/books/")
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setData(results);
      });
  }, []);

  // const addToWishlist = (id) => {
  //   console.log("clicked");
  //   localStorage.setItem(`BookStore-${id}`, id);
  //   history.push("/Wishlist");
  // };
  return (
    <div className="container">
      {data
        ? data.map((item) => {
            return (
              <div
                className="card"
                style={{
                  width: "25rem",
                  float: "left",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
                key={item.id}
              >
                <img
                  className="card-img-top"
                  style={{ height: "400px" }}
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>

                  <p className="card-text">
                    <b>Author:</b>&nbsp;
                    {item.author}
                  </p>
                  <p className="card-text">
                    <b>Price:</b>&nbsp;${item.price}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    {/* <button
                      className="btn btn-info"
                      onClick={() => addToWishlist(item.id)}
                    >
                      Add to Wishlist
                    </button> */}
                    <Link
                      to={`/EditBook/${item.id}`}
                      className="btn btn-warning"
                    >
                      View Book details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default Home;

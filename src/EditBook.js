/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

function EditBook(props) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const fetchBook = () => {
    fetch(
      `https://pure-bastion-33744.herokuapp.com/api/book-detail/${props.match.params.id}/`
    )
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setData(results);
        setTitle(results.title);
        setDescription(results.description);
        setAuthor(results.author);
        setPrice(parseFloat(results.price));
        setImage(results.image);
      });
  };
  useEffect(() => {
    fetchBook();
  }, []);

  const renderForm = () => {
    return (
      <div className="container">
        <form onSubmit={(e) => editBook(e)}>
          <h4>Edit Book Details</h4>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault22">Title</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault22"
                placeholder="Book Title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault22">Author</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault22"
                placeholder="Author name"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="validationDefault22">Description</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault22"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="validationDefault22">Price</label>
              <input
                type="number"
                className="form-control"
                id="validationDefault22"
                placeholder="Amount in USD"
                value={String(price)}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file col-md-3">
              <input
                type="file"
                className="custom-file-input"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label className="custom-file-label">Choose file</label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-info"
            style={{ marginTop: "20px" }}
          >
            Submit Changes
          </button>
          <br />
        </form>
      </div>
    );
  };

  const editBook = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "BookStore");
    data.append("cloud_name", "doi3x39cn");
    fetch("https://api.cloudinary.com/v1_1/doi3x39cn/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);

        console.log(title, description, author, price, data.url);

        fetch(
          `https://pure-bastion-33744.herokuapp.com/api/book-detail/${props.match.params.id}/`,
          {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              author,
              price: parseFloat(price),
              image: data.url,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              console.log(data.error);
            } else {
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBook = (id) => {
    fetch(`https://pure-bastion-33744.herokuapp.com/api/book-detail/${id}/`, {
      method: "delete",
    }).then(() => history.push("/"));
  };
  return (
    <div className="container">
      <div
        className="card"
        style={{
          width: "70rem",

          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "80px",
        }}
        key={data.id}
      >
        {/* <img
          className="card-img-top"
          style={{ height: "180px" }}
          src={data.image}
          alt="Card image cap"
        /> */}
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">
            <b>Author:</b>
            {data.author}
          </p>
          <p className="card-text">
            <b>Price:</b>${data.price}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button
              className="btn btn-danger"
              onClick={() => deleteBook(data.id)}
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
      {data && renderForm()}
    </div>
  );
}

export default EditBook;

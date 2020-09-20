import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddBooks() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const submitBook = (e) => {
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

        console.log(title, description, author, price);
        data.url &&
          fetch("https://pure-bastion-33744.herokuapp.com/api/books/", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              author,
              price,
              image: data.url,
            }),
          })
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
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Book Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author name"
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label htmlFor="inputCity">Price</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Amount in USD"
              required
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span>
          </div>
          <div className="custom-file col-md-3">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <button
          onClick={(e) => submitBook(e)}
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
        >
          Create Book Listing
        </button>
      </form>
    </div>
  );
}

export default AddBooks;

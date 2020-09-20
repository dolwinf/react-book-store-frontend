import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavBar";
import AddBooks from "./AddBooks";
import Whislist from "./Whislist";
import EditBook from "./EditBook";

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/Add" component={AddBooks} />
      <Route path="/Wishlist" component={Whislist} />
      <Route path="/EditBook/:id" component={EditBook} />
    </Router>
  );
}

export default App;

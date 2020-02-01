import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import BootcampList from "./BootCampList/BootcampList";
import BootcampPage from "./BootcampPage/BootcampPage";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Bootcamp List</Link>
        </nav>
        <header>
          <h1>Bootcamps!</h1>
        </header>
        <main>
          <Route exact path="/" component={BootcampList} />
          <Route
            //using dynamic path with a route param for the bootcampId
            path="/bootcamp/:bootcampId"
            component={BootcampPage}
          />
        </main>
        <footer>&copy; Bootcamp List, 2020. All Rights Reserved.</footer>
      </div>
    );
  }
}

export default App;

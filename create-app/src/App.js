import React from "react";
import "./app.scss";
import Header from "./Header.js";
import Counter from "./Counter.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

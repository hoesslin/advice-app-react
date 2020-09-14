import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvise();
  }

  url = "https://api.adviceslip.com/advice";

  fetchAdvise = () => {
    axios
      .get(this.url)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({
          //advice: advice
          advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className={"heading"}>{advice}</h1>
          <button className={"button"} onClick={this.fetchAdvise}>
            <span>GIVE ME ADVIDE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

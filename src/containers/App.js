import React, { Component } from "react";
import Table from "./Table";
import StatusBlock from "../components/StatusBlock";

class App extends Component {
  render() {
    return (
      <div>
        <Table />
        <StatusBlock />
      </div>
    );
  }
}

export default App;

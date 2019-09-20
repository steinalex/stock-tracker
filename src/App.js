import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4000",
      dataPoints: ["companyName"],
      displayData: {}
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        {Object.keys(response).map((key, index) =>
          <li key={index}>{key}: {response[key]}</li>
        )}
      </div>
    );
  }
}

export default App;
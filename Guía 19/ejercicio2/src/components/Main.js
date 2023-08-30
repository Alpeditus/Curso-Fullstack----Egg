import React, { Component } from "react";

const mensaje = "El navbar y el footer están más facheros.";

export class Main extends Component {
  render() {
    return (
      <div>
        <br />
        <h1>A continuación un lindo mensaje:</h1>
        <p> {mensaje} </p>
      </div>
    );
  }
}

export default Main;

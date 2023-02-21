import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCounter: 0,
    };
  }

  increase = () => {
    alert("Aumento");
  };

  render() {
    return (
      <div>
        <h1>Este é um teste pois meu último arquivo não renderizou</h1>
        <h2>Contador: {this.state.myCounter}</h2>
        <button onClick={this.increase}>Aumentar</button>
        <button>Diminuir</button>
      </div>
    );
  }
}

export default App;

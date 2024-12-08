import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      multiplier: 1,
    };
  }

  // Increase the counter
  increase = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.multiplier,
    }));
  };

  // Decrease the counter
  decrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - prevState.multiplier,
    }));
  };

  // Reset the counter
  reset = () => {
    this.setState({ count: 0 });
  };

  // Change application
  changeMultiplier = (value) => {
    this.setState({ multiplier: value });
  };

  render() {
    const { count, multiplier } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Лічильник</h1>
        <h2>Значення : {count}</h2>
        <h3>Доданок : {multiplier}</h3>
        <div style={{ marginBottom: "20px" }}>
          <button onClick={this.increase} className="option-buttons">Збільшити</button>
          <button onClick={this.decrease} className="option-buttons" style={{ marginLeft: "10px" }}>
            Зменшити
          </button>
          <button onClick={this.reset} className="option-buttons" style={{ marginLeft: "10px" }}>
            Скинути
          </button>
        </div>
        <b>================</b>
        <h4>Обрати доданок</h4>
        <div>
          {[1, 5, 10].map((value) => (
            <button
              key={value}
              onClick={() => this.changeMultiplier(value)}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: multiplier === value ? "#4CAF50" : "#f0f0f0",
                color: multiplier === value ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ClickCounter;

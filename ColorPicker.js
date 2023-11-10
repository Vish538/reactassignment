import React, { Component } from 'react';
import './ColorPicker.css';
class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.handleButtonClick}>
          <h1>Pick a color</h1>
        </button>
        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              />
            ))}
          </div>
        )}
        {selectedColor && (
          <p>You picked: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;

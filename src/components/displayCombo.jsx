import React, { Component } from "react";
import MenuItem from "./menuItem";

// Fix formatDesc function: read up on state, why name is not passed through
class DisplayCombo extends Component {
  constructor(props) {
    super(props);
  }

  formatDesc = number => {
    const num = Number(number.name.split(" ")[1]);
    let description = `Combo ${num} comes with ${num} portion${
      num > 1 ? "s" : ""
    } of your choice along with either white rice, fried rice, or noodles`;
    return description;
  };

  render() {
    const { onAdd, onSubtract, items } = this.props;
    return (
      <div className="my-container">
        {items[0].map(combo => (
          <MenuItem
            key={combo.id}
            name={combo.name}
            price={combo.price}
            image={combo.image}
            onAdd={onAdd}
            onSubtract={onSubtract}
            description={this.formatDesc(combo)}
            value={combo.value}
          />
        ))}
      </div>
    );
  }
}

export default DisplayCombo;

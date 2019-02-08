import React, { Component } from "react";
import MenuItem from "./menuItem";

class DisplayProtein extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onAdd, onSubtract, items } = this.props;
    return (
      <div className="my-container">
        {items[1].map(combo => (
          <MenuItem
            key={combo.id}
            name={combo.name}
            price={`$ ${combo.price}/lb`}
            image={combo.image}
            onAdd={onAdd}
            onSubtract={onSubtract}
          />
        ))}
      </div>
    );
  }
}

export default DisplayProtein;

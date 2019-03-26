import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Title from "./Title";

class DisplayProtein extends Component {
  render() {
    const { onAdd, onSubtract, items } = this.props;
    return (
      <div className="pad-top">
        <Title title="Proteins" />
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
      </div>
    );
  }
}

export default DisplayProtein;

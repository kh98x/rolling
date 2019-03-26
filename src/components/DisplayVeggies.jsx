import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Title from "./Title";

class DisplayVeggies extends Component {
  render() {
    return (
      <div className="pad-top">
        <Title title="Veggies" />
        <div className="my-container">
          {this.props.items[2].map(veg => {
            return (
              <MenuItem
                key={veg.id}
                name={veg.name}
                price={`$ ${veg.price}/lb`}
                image={veg.image}
                onAdd={this.props.onAdd}
                onSubtract={this.props.onSubtract}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayVeggies;

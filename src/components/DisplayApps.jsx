import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Title from "./Title";

class DisplayApps extends Component {
  render() {
    const { onAdd, onSubtract } = this.props;
    return (
      <div className="pad-top">
        <Title title="Apps" />
        <div className="my-container">
          {this.props.items[3].map(app => (
            <MenuItem
              key={app.id}
              name={app.name}
              price={`$ ${app.price}/${app.unit}`}
              image={app.image}
              onAdd={onAdd}
              onSubtract={onSubtract}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayApps;

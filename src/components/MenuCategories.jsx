import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuCategories extends Component {
  state = {
    categories: [
      {
        type: "Combos",
        img:
          "https://images.unsplash.com/photo-1519624213695-6819a985fb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        to: "/combos"
      },
      {
        type: "Apps",
        img:
          "https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        to: "/appetizers"
      },
      {
        type: "Proteins",
        img:
          "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        to: "/proteins"
      },
      {
        type: "Veggies",
        img:
          "https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        to: "/veggies"
      }
    ],
    selected: null
  };

  displayCategory = () => {
    return (
      <div className="pic-container row overflow-hidden">
        {this.state.categories.map(item => (
          <div
            className="card menu-category-thumbnail text-white m-3"
            key={item.type}
          >
            <img
              src={item.img}
              className="menu-category-thumbnail"
              alt={item.type}
            />
            <div className="card-img-overlay">
              <button className="btn btn-danger">
                <Link
                  to={item.to}
                  className="card-text text-decoration-none text-white"
                >
                  {item.type}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <figure>{this.displayCategory()}</figure>
      </div>
    );
  }
}

export default MenuCategories;

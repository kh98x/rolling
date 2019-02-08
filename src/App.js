import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import CarouselFP from "./components/carousel";
import MenuItem from "./components/menuItem";
import DisplayProtein from "./components/displayProtein";
import DisplayCombo from "./components/displayCombo";
import Title from "./components/titles";
import Contact from "./components/contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faPlusCircle,
  faMinusCircle,
  faCartArrowDown
} from "@fortawesome/free-solid-svg-icons";
import Map from "./components/map";
import About from "./components/about";

library.add(
  fab,
  faPlusCircle,
  faMinusCircle,
  faCartArrowDown,
  faInstagram,
  faYelp,
  faPhone,
  faEnvelope
);

class App extends Component {
  state = {
    yourOrder: [],
    items: [
      // COMBOS [0]
      [
        {
          id: 1,
          name: "Combo 1",
          price: 3.99,
          description: "Pick one item",
          value: 0,
          image:
            "https://images.unsplash.com/photo-1500040760498-8be2dccbdea7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "Combo 2",
          price: 4.99,
          description: "Pick two items",
          value: 0,
          image:
            "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        },
        {
          id: 3,
          name: "Combo 3",
          price: 5.99,
          description: "Pick three items",
          value: 0,
          image:
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
        }
      ],
      // PROTEINS [1]
      [
        {
          id: 11,
          name: "Sliced Beef",
          price: 7.99,
          unit: "/lb",
          image:
            "https://images.unsplash.com/photo-1546624605-e8da8b4b16fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80",
          value: 0
        },
        {
          id: 12,
          name: "Orange Chicken",
          price: 6.99,
          unit: "/lb",
          image:
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
          value: 0
        },
        {
          id: 13,
          name: "Steamed Fish",
          price: 4.99,
          unit: "/lb",
          image:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          value: 0
        },
        {
          id: 14,
          name: "Sweet and Sour Pork",
          price: 5.49,
          unit: "/lb",
          image:
            "https://images.unsplash.com/photo-1520906494169-2ac43f0eed00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          value: 0
        },
        {
          id: 15,
          name: "Fried Shrimp",
          price: 7.99,
          unit: "/lb",
          image:
            "https://images.unsplash.com/photo-1542827875-0d90aadea5c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80",
          value: 0
        }
      ],
      // VEGGIES [2]
      [
        { id: 21, name: "Broccoli", price: 3.99, unit: "/lb", value: 0 },
        {
          id: 22,
          name: "Steamed Cauliflower",
          price: 4.39,
          unit: "/lb",
          value: 0
        },
        {
          id: 23,
          name: "Sliced Squash and Carrots",
          price: 3.49,
          unit: "/lb",
          value: 0
        },
        {
          id: 24,
          name: "Stir Fried Green Beans",
          price: 5.99,
          unit: "/lb",
          value: 0
        },
        { id: 25, name: "Mapo Tofu", price: 4.99, unit: "/lb", value: 0 }
      ],
      // APPETIZERS [3]
      [
        { id: 31, name: "Egg Rolls", price: 0.99, unit: "/3", value: 0 },
        { id: 32, name: "Beef Wrap", price: 4.39, unit: "1 roll", value: 0 },
        { id: 33, name: "Pig Ears", price: 5.49, unit: "1/2 lb", value: 0 }
      ]
    ]
  };

  // handleToggle = () => {
  // const curOpenState = [this.state.isOpen];
  // curOpenState[0] === true ? false : true;
  //   this.setState(state => {
  //     isOpen: !state.isOpen;
  //   });
  //   console.log(this.state.isOpen);
  // };

  handleAddItem = item => {
    const items = [...this.state.items];
    for (let cur of items) {
      for (let i = 0; i < cur.length; i++) {
        if (cur[i].name === item.name) cur[i].value++;
        this.setState({ items });
        this.handleTotalCartItems();
      }
    }
  };

  handleSubtractItem = item => {
    const items = [...this.state.items];
    for (let cur of items) {
      for (let i = 0; i < cur.length; i++) {
        if (cur[i].name === item.name && cur[i].value > 0) cur[i].value--;
        this.setState({ items });
        this.handleTotalCartItems();
      }
    }
  };

  // Minor issue: All +/- buttons fire when one is clicked
  handleTotalCartItems = () => {
    const newState = [...this.state.items];
    let newOrder = [];
    for (let cur of newState) {
      for (let val in cur) {
        if (cur[val].value > 0) newOrder.push(cur[val]);
      }
    }
    this.setState((this.state.yourOrder = newOrder));
    console.log(this.state.yourOrder.length);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItems={this.state.yourOrder.length}
          yourOrder={this.state.yourOrder}
          isOpen={this.state.isOpen}
          handleToggle={this.handleToggle}
        />
        <CarouselFP />
        <Title title="Combos" />
        <DisplayCombo
          {...this.state}
          onAdd={this.handleAddItem}
          onSubtract={this.handleSubtractItem}
        />
        <div className="displayProtein-container">
          <Title title="Proteins" />
          <DisplayProtein
            {...this.state}
            onAdd={this.handleAddItem}
            onSubtract={this.handleSubtractItem}
          />
        </div>
        <Contact />
        <About />
      </React.Fragment>
    );
  }
}

export default App;

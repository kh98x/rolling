import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../index.css";
import NavBar from "./NavBar";
import DisplayApps from "./DisplayApps";
import DisplayVeggies from "./DisplayVeggies";
import DisplayProtein from "./DisplayProtein";
import DisplayCombo from "./DisplayCombo";
import Contact from "./Contact";
import Checkout from "./Checkout";
import Credit from "./Credit";
import About from "./About";
import Main from "./Main";
import Menu from "./Menu";
import Footer from "../components/Footer";
import history from "../history";

class App extends Component {
  state = {
    notice: { text: null, background: null },
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
            "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80"
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
        {
          id: 21,
          name: "Broccoli",
          image:
            "https://images.unsplash.com/photo-1513135184026-83faa001389e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
          price: 3.99,
          unit: "/lb",
          value: 0
        },
        {
          id: 22,
          name: "Pickled Cucumbers",
          image:
            "https://images.unsplash.com/photo-1541696432-7a70d69e0309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          price: 4.39,
          unit: "/lb",
          value: 0
        },
        {
          id: 23,
          name: "Sliced Squash and Carrots",
          image:
            "https://images.unsplash.com/photo-1519141704389-588b537baba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          price: 3.49,
          unit: "/lb",
          value: 0
        },
        {
          id: 24,
          name: "Bok Choy",
          image:
            "https://images.unsplash.com/photo-1515192558558-17a7c4904ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
          price: 4.99,
          unit: "/lb",
          value: 0
        }
      ],
      // APPETIZERS [3]
      [
        {
          id: 31,
          name: "Egg Rolls",
          image:
            "https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
          price: 0.99,
          unit: "3",
          value: 0
        },
        {
          id: 32,
          name: "Pork Dumplings",
          image:
            "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          price: 4.39,
          unit: "5",
          value: 0
        },
        {
          id: 33,
          name: "Fried Tofu",
          image:
            "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          price: 5.49,
          unit: "lb",
          value: 0
        }
      ]
    ]
  };

  handleActionNotice = (text, bg) => {
    this.setState({ notice: { text, background: bg } });
  };

  handleAddItem = item => {
    const items = [...this.state.items];
    for (let cur of items) {
      for (let i = 0; i < cur.length; i++) {
        if (cur[i].name === item.name) cur[i].value++;
        this.setState({ items });
        this.handleTotalCartItems();
        this.handleActionNotice("added!", "btn btn-success");
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
        this.handleActionNotice("removed!", "btn btn-danger");
      }
    }
  };

  handleRemoveAllItem = item => {
    const items = [...this.state.items];
    for (let cur of items) {
      for (let i = 0; i < cur.length; i++) {
        if (cur[i].name === item.name && cur[i].value > 0)
          cur[i].value = cur[i].value * 0;

        this.setState({ items });
        this.handleTotalCartItems();
      }
    }
  };

  handleTotalCartItems = () => {
    const newState = [...this.state.items];
    let newOrder = [];
    for (let cur of newState) {
      for (let val in cur) {
        if (cur[val].value > 0) newOrder.push(cur[val]);
      }
    }
    this.setState({ yourOrder: newOrder });
  };

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavBar
              totalItems={this.state.yourOrder.length}
              yourOrder={this.state.yourOrder}
              isOpen={this.state.isOpen}
              handleToggle={this.handleToggle}
              onAdd={this.handleAddItem}
              onSubtract={this.handleSubtractItem}
            />
            <div>
              <div
                className="modal fade"
                id="displayActionNotice"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="showActionModal"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="showActionModal">
                        Item {this.state.notice.text}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Your item has been successfully {this.state.notice.text}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className={this.state.notice.background}
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/about" exact component={About} />
              <Route path="/menu" exact component={Menu} />
              <Route
                path="/credit"
                exact
                render={() => <Credit {...this.state} />}
              />
              <Route
                path="/proteins"
                exact
                render={() => (
                  <DisplayProtein
                    {...this.state}
                    onAdd={this.handleAddItem}
                    onSubtract={this.handleSubtractItem}
                  />
                )}
              />
              <Route
                path="/combos"
                exact
                render={() => (
                  <DisplayCombo
                    {...this.state}
                    onAdd={this.handleAddItem}
                    onSubtract={this.handleSubtractItem}
                  />
                )}
              />

              <Route
                path="/veggies"
                exact
                render={() => (
                  <DisplayVeggies
                    {...this.state}
                    onAdd={this.handleAddItem}
                    onSubtract={this.handleSubtractItem}
                  />
                )}
              />
              <Route
                path="/appetizers"
                exact
                render={() => (
                  <DisplayApps
                    {...this.state}
                    onAdd={this.handleAddItem}
                    onSubtract={this.handleSubtractItem}
                  />
                )}
              />

              <Route path="/contact" exact component={Contact} />
              <Route
                path="/checkout"
                exact
                render={() => (
                  <Checkout
                    {...this.state}
                    onAdd={this.handleAddItem}
                    onSubtract={this.handleSubtractItem}
                    removeAllItems={this.handleRemoveAllItem}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React from "react";
import MenuCategories from "./MenuCategories";

class CardsFP extends React.Component {
  render() {
    return (
      <div className="no-gutters">
        {/* === MENU SECTION ===*/}

        <div className="card bg-light text-dark m-5">
          <img
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            className="card-img"
            alt="cutting board and knife"
          />
          <div className="card-img-overlay">
            <h2 className="card-title text-dark text-center">
              Explore the menu
            </h2>
            {/*
                IMAGES OVERFLOWING CONTAINER: FIX LATER
              */}
            <div className="flex" style={{ height: "10vh" }}>
              <div className="d-flex flex-sm-wrap overflow-hidden">
                <MenuCategories />
              </div>
            </div>
          </div>
        </div>
        {/* === DRINKS SECTION ===*/}
        <div className="card bg-white text-white m-5">
          <img
            src="https://images.unsplash.com/photo-1541696490-8744a5dc0228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            className="card-img"
            alt="drinks background"
          />
          <div className="card-img-overlay">
            <h2 className="card-text text-center text-dark">
              Come try our drinks!
            </h2>{" "}
            <h4 className="card-text text-center text-dark">
              Our customers love our boba milk tea and iced coffee
            </h4>
            <div className="displayCard">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                      alt="coffee"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark">Iced Coffee</h5>
                      <p className="card-text text-dark">
                        Freshly brew coffee daily, whole milk and sugar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                      alt="boba"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark">Boba Milk Tea</h5>
                      <p className="card-text text-dark">
                        Black tea with condensed milk and boba
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsFP;

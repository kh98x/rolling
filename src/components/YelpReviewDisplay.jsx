import React, { Component } from "react";
import yelp from "../apis/yelp";
import renderStars from "./renderStars";
import Title from "./Title";

class YelpReviewDisplay extends Component {
  state = { reviews: [], reviewCount: null };

  componentDidMount() {
    this.yelpOnLoad("reviews");
  }

  yelpOnLoad = async term => {
    const response = await yelp.get(`/${term}`);
    console.log(response.data.reviews); // viewing purposes

    const allData = await yelp.get();
    this.setState({ reviewCount: allData.data.review_count });

    this.setState({ reviews: response.data.reviews });
  };

  renderReviews = () => {
    if (this.state.reviews.length === 0) {
      return (
        <div className="text-center">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        </div>
      );
    }

    return (
      <div className="card">
        <Title title="Reviews" />
        {this.state.reviews.map(review => (
          <React.Fragment key={review.user.id}>
            <div className="card m-3">
              <div className="card-title text-center">
                {renderStars(review.rating)}
              </div>

              <span className="text-center ubuntu">
                {review.text}
                <br /> -{" "}
                <strong>
                  <em>{review.user.name}</em>
                </strong>
                <br />
                <a
                  className="text-muted yelp-read-more-btn"
                  href={review.url}
                  target="blank"
                >
                  Read more
                </a>
              </span>
              <br />
              <span className="text-center text-secondary">
                Created on {review.time_created.split(" ")[0]}
              </span>
              <br />
            </div>
          </React.Fragment>
        ))}
        <p className="text-center text-secondary">
          Based on {this.state.reviewCount} reviews from
          <a
            className="m-2"
            style={{ fontSize: "2em" }}
            href="https://www.yelp.com/biz/rolling-wok-rowland-heights"
            target="blank"
          >
            <i className="fab fa-yelp text-danger" />
          </a>
        </p>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderReviews()}</React.Fragment>;
  }
}

export default YelpReviewDisplay;

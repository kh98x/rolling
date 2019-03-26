import React from "react";

const renderStars = num => {
  // refactor to string for img and logic for whole number vs half numbers
  return (
    <img
      src={require(`../yelp_stars/large_${
        num % 1 === 0 ? num : Math.floor(num) + "_half"
      }.png`)}
      alt="yelp-stars"
    />
  );
};

export default renderStars;

import React from "react";
import Title from "./Title";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className="pad-top">
      <Title title="Menu" />
      <MenuCategories />
    </div>
  );
};

export default Menu;

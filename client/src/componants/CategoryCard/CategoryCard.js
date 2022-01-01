import React from "react";
import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <>
      <div className="CategoryCard">
        <img src={props.imagesrc} alt="Cat" className="CategoryCard_img" />
        <a href="/" className="CategoryCard_Hover">
          <div className="CategoryCard_Item">
            <p className="Title_CategoryCard">{props.Title}</p>
            <p className="text_CategoryCard">{props.text}</p>
          </div>
          <div className="CategoryCard_child1">
            <div className="CategoryCardText">Shop Now</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default CategoryCard;

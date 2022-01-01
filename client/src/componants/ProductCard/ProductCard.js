import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductCard.css";
function ProductCard() {
  return (
    <>
      <div className="ProductCard">
        <div className="ProductCard1">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp"
            alt="Productcard"
            className="ProductCardImg"
          />

          <div className="ProductCardButton">
            <p>Quick View</p>
          </div>
        </div>
        <div className="container">
          <div className="ProductCard2">
            <p className="ProductCard_Name">Esprit Ruffle Shirt</p>
            <AiOutlineHeart className="Icon_ProductCardLike" />
          </div>
        </div>
        <div className="container">
          <div className="ProductCard3">
            <p className="ProductCardPrice">$16.64</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

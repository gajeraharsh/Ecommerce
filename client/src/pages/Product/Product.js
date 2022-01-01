import React from "react";
import "./Product.css";
import Product1 from "../../assets/images/Product_1.webp";
import Product2 from "../../assets/images/Product_2.webp";
import Product3 from "../../assets/images/Product_3.webp";
import { AiOutlineExpandAlt } from "react-icons/ai";
import ProductCounter from "./ProductCounter";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="Product_view">
      <div className="Product_Section1">
        <div className="Producsection1_imagediv">
          <img src={Product1} alt="product1" />
        </div>
        <div className="Producsection1_imagediv">
          <img src={Product2} alt="product2" />
        </div>
        <div className="Producsection1_imagediv">
          <img src={Product3} alt="product3" />
        </div>
      </div>
      <div className="Product_Section2">
        <img src={Product1} alt="product1" />
        <div className="explore_button">
          <AiOutlineExpandAlt className="explore_icon" />
        </div>
      </div>
      <div className="Product_Section3">
        <div className="Product_Container">
          <div className="Productone_info">
            <h4 className="Productone_title">Lightweight Jacket</h4>
            <span className="Productone_price">$58.79</span>
            <p className="Productone_desc">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
          </div>
          <div className="Productone_items">
            <div className="Productone_size">
              <p>Size</p>
              <select>
                <option value="">Selection any Option</option>
                <option value="S">Size S</option>
                <option value="M">Size M</option>
                <option value="L">Size L</option>
                <option value="XL">Size Xl</option>
              </select>
            </div>
            <div className="Productone_color">
              <p>Color</p>
              <select>
                <option value="">Selection any Option</option>
                <option value="S">Size S</option>
                <option value="M">Size M</option>
                <option value="L">Size L</option>
                <option value="XL">Size Xl</option>
              </select>
            </div>
          </div>

          {/* Product counter */}
          <ProductCounter />
          <div className="Productone_button">
            <Link to="/product">
              <div className="btn_Slider btn_productone">
                <Link to={"/product"}>ADD TO CART</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

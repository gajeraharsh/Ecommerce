import React from "react";
import "./Cartproduct.js";
import ProductCounter from "../Product/ProductCounter.js";
import Image1 from "../../assets/images/Product_1.webp";
function Cartproduct() {
  return (
    <>
      <tr className="table_row">
        <td className="column_1">
          <div className="Cartproduct_image">
            <img src={Image1} alt="productcart" />
          </div>
        </td>
        <td className="column_2">Fresh Strawberries</td>
        <td className="column_3"> $ 36.00</td>
        <td className="column_4">
          <div className="cartproductcounter">
            <ProductCounter />
          </div>
        </td>
        <td className="column_5">$ 36.00</td>
      </tr>
    </>
  );
}

export default Cartproduct;

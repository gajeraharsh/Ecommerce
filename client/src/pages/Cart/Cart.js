import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartInput from "./CartInput";
import Cartproduct from "./Cartproduct";
function Cart() {
  return (
    <div className="container m-t">
      <div className="Cart_container">
        <div className="Cart_Section1">
          <table className="table_shoping_cart">
            <tbody>
              <tr className="table_head">
                <th className="column column_1">PRODUCT</th>
                <th className="column column_2"></th>
                <th className="column column_3">PRICE</th>
                <th className="column column_4">QUANTITY</th>
                <th className="column column_5">TOTAL</th>
              </tr>
              <Cartproduct />
              <Cartproduct />
            </tbody>
          </table>
        </div>
        <div className="Cart_Section2">
          <div className="Cartsection_details">
            <div className="Cartsection_wraper">
              <h4 className="Cartsectiontitle"> CART TOTALS</h4>
              <h3 className="Cartsectiontotal">
                Subtotal: <span>$79.65</span>
              </h3>
              <div className="Cartsectionshipping">
                <h3>Shipping:</h3>
                <div className="Cartsectioninfo">
                  <p>
                    There are no shipping methods available. Please double check
                    your address, or contact us if you need any help.
                  </p>
                  <CartInput placeholder={"state/country"} />
                  <CartInput placeholder={"Postcopde/Zip"} />
                  <CartInput placeholder={"Adresss"} />
                  <div className="space_padding"></div>
                </div>
              </div>
            </div>
            <h4 className="CartTotale_title">
              Total : <span>$79.65</span>
            </h4>
            <div className="Productone_button cartone_button">
              <Link to="/cart">
                <div className="btn_Slider btn_cart">
                  <Link to={"/cart"}>PROCEED TO CHECKOUT</Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

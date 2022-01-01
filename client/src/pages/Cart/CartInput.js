import React from "react";
import "./Cart.css";
function CartInput({ placeholder }) {
  return (
    <div className="Cartinput_compo">
      <input type="text" className="Cartinput" placeholder={placeholder} />
    </div>
  );
}

export default CartInput;

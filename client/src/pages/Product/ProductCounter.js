import React, { useState } from "react";
import "./Product.css";
function ProductCounter() {
  const [counter, setcounter] = useState(1);
  const add = () => {
    setcounter(counter + 1);
  };
  const remove = () => {
    setcounter(counter > 0 ? counter - 1 : 0);
  };
  return (
    <div className="Product_Counter">
      <div className="ProductCounter_box">
        <div className="leftCounter" onClick={remove}>
          <p>-</p>
        </div>
        <div className="Counterdisplay">
          <p>{counter}</p>
        </div>
        <div className="RightCounter" onClick={add}>
          <p>+</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCounter;

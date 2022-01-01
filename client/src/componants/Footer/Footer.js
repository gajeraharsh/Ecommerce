import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="container Footer_back">
        <div className="Footer">
          <div className="Foo_call1">
            <p className="Foo_header">CATEGORIES</p>
            <ul>
              <li>
                {" "}
                <a href="/home">Woman</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/home">Men</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/home">Shoes</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/home">Watches</a>{" "}
              </li>
            </ul>
          </div>

          <div className="Foo_call2">
            <p className="Foo_header">GET IN TOUCH</p>
            <p className="Foo_header_para">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
          <div className="Foo_call3">
            <p className="Foo_header">NEWSLETTER</p>
            <div className="form">
              <input
                className="newsletter"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <button type="submit" className="btn_square">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <p className="copyright">Copyright ©2021 All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;

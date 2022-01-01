import React, { useEffect, useState } from "react";
import { SortBy, Price, Tags } from "./FilterData";
import "./FilterCard.css";
function FilterCard({ Filteropen }) {
  useEffect(() => {
    console.log(Filteropen);
  }, [Filteropen]);
  return (
    <div className="FilterCard_container">
      <div
        className={Filteropen ? "FilterCard FilterCard_close" : "FilterCard "}
      >
        <div className="FilterCard_section1">
          <p className="FilterCard_Title">SortBy</p>
          <ul className="FilterCard_List">
            {SortBy.map((data, index) => {
              return (
                <li className="FilterCard_Item" key={index}>
                  <a href="/">{data.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="FilterCard_section1">
          <p className="FilterCard_Title">Price</p>
          <ul className="FilterCard_List">
            {Price.map((data, index) => {
              return (
                <li className="FilterCard_Item" key={index}>
                  <a href="/">{data.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="FilterCard_section1">
          <p className="FilterCard_Title">Tags</p>
          <ul className="FilterCard_List">
            {Tags.map((data, index) => {
              return (
                <li className="FilterCard_Item" key={index}>
                  <a href="/">{data.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;

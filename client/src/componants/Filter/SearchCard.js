import React from "react";
import "./SearchCard.css";
import { BiSearchAlt2 } from "react-icons/bi";
function SearchCard({ Searchopen }) {
  return (
    <div className="SearchCard_Container">
      <div
        className={Searchopen ? "SearchCard CloseSearchCard" : "SearchCard  "}
      >
        <div className="SearchCard_Box">
          <div className="SearchCardIconBox">
            <BiSearchAlt2 />
          </div>
          <div className="SearchCardInputBox">
            <input
              type="text"
              placeholder="Search"
              className="SearchCardInput"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;

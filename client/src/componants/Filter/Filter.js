import React, { useState } from "react";
import "./Filter.css";
import FilterData from "./FilterData";
import { Link } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
function Filter({ Filteropen, setFilteropen, Searchopen, setSearchopen }) {
  const [FilterActive, SetFilterActive] = useState(0);

  const SetFilter = (id) => {
    if (FilterActive === id - 1) {
      SetFilterActive(id - 1);
    } else {
      SetFilterActive(id - 1);
    }
  };
  return (
    <>
      <div className="Filter_Container">
        <div className="Filter">
          <div className="Filter_Category">
            <ul className="Filter_ul">
              {FilterData.map((item) => (
                <li className="Filter_li" key={item.id}>
                  <Link
                    className={
                      FilterActive === item.id - 1
                        ? "Filter_a active"
                        : "Filter_a"
                    }
                    to="/product"
                    onClick={() => SetFilter(item.id)}
                  >
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="Filter_Buttons">
            <div
              className={Filteropen ? "FilterButton1 active" : "FilterButton1"}
              onClick={() => setFilteropen(!Filteropen)}
            >
              <BsFilter />
              <p>Filter</p>
            </div>
            <div
              className={Searchopen ? "FilterButton1 active" : "FilterButton1"}
              onClick={() => setSearchopen(!Searchopen)}
            >
              <AiOutlineSearch />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

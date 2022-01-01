import React, { useState } from "react";
import "./Products.css";
import Filter from "../../componants/Filter/Filter";
import FilterCard from "../../componants/Filter/FilterCard";
import SearchCard from "../../componants/Filter/SearchCard";
import ProductCards from "../../componants/ProductCard/ProductCards";
function Products() {
  const [Filteropen, setFilteropen] = useState(false);
  const [Searchopen, setSearchopen] = useState(false);
  return (
    <div className="Products">
      <Filter
        Filteropen={Filteropen}
        setFilteropen={setFilteropen}
        Searchopen={Searchopen}
        setSearchopen={setSearchopen}
      />
      <FilterCard Filteropen={Filteropen} />
      <SearchCard Searchopen={Searchopen} />
      <ProductCards />
    </div>
  );
}

export default Products;

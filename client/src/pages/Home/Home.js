import React, { useState } from "react";
import "./Home.css";
import Slider from "../../componants/Slider/Slider";
import CategoryCard from "../../componants/CategoryCard/CategoryCard";
import Filter from "../../componants/Filter/Filter";
import FilterCard from "../../componants/Filter/FilterCard";
import SearchCard from "../../componants/Filter/SearchCard";
import ProductCards from "../../componants/ProductCard/ProductCards";
function Home() {
  const [Filteropen, setFilteropen] = useState(false);
  const [Searchopen, setSearchopen] = useState(false);
  return (
    <>
      <div className="Home">
        <Slider />
        <div className="CategoryCard_View">
          <CategoryCard
            Title={"Women"}
            text={"Spring 2018"}
            imagesrc={
              "https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp"
            }
          />
          <CategoryCard
            Title={"Men"}
            text={"Spring 2018"}
            imagesrc={
              "https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp"
            }
          />
          <CategoryCard
            Title={"Accessories"}
            text={"Spring 2018"}
            imagesrc={
              "https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp"
            }
          />
        </div>

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
    </>
  );
}

export default Home;

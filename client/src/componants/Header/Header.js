import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/images/download.webp";
import ToggleMenu from "../../helper/ToggleMenu/ToggleMenu";
import HomeSlider from "./HomeSlider";
import CartSlider from "./CartSlider";
function Header({ pathview }) {
  const [menu, setmenu] = useState(false);
  const [nav, setnav] = useState(false);
  const [cartslider, setcartslider] = useState(false);

  const closemenu = () => {
    setmenu(false);
  };
  const closecart = () => {
    setcartslider(false);
  };
  const navscroll = () => {
    if (pathview) {
      setnav(true);
    } else if (window.scrollY >= 80) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", navscroll);

  useEffect(() => {
    if (pathview) {
      setnav(true);
    }
  }, [pathview]);
  return (
    <>
      <div className={`navbar_header ${nav && "scrooll_header"}`}>
        <div className="first_part">
          <div className="logo">
            <img src={Logo} alt={`Logo not avalible`} />
          </div>
        </div>
        <div className="second_part">
          <ul className="ul_list">
            <li className="li_list">
              <a href="/" className="a_list">
                Home
              </a>
            </li>
            <li className="li_list">
              <a href="/product" className="a_list">
                Shop
              </a>
            </li>
            <li className="li_list">
              <a href="/home" className="a_list">
                About
              </a>
            </li>
            <li className="li_list">
              <a href="/home" className="a_list">
                Contect
              </a>
            </li>
          </ul>
        </div>
        <div className="third_part">
          <div className="icon_header">
            <div className="icon">
              <FaShoppingCart onClick={() => setcartslider(!cartslider)} />
            </div>
            <div className="icon">
              <FaBars onClick={() => setmenu(!menu)} />
            </div>
          </div>
        </div>
      </div>
      {/* navbar toggle menu */}

      <ToggleMenu
        menu={menu ? menu : cartslider ? cartslider : null}
        close={menu ? closemenu : cartslider ? closecart : null}
      >
        {menu ? <HomeSlider /> : cartslider ? <CartSlider /> : null}
      </ToggleMenu>
    </>
  );
}

export default Header;

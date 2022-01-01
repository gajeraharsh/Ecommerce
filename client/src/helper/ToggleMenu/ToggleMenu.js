import React from "react";
import "./ToggleMenu.css";
import { GrClose } from "react-icons/gr";
function ToggleMenu({ menu, close, children }) {
  return (
    <>
      <div className={menu ? "asider visiblemenu" : "asider"}>
        <div
          className={menu ? "nevbar_toggle_menu active" : "nevbar_toggle_menu"}
        >
          <div className="closemenusection">
            <div className="icon closeicon">
              <GrClose onClick={close} />
            </div>
          </div>
          <div className="navigarionlinks_menu">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ToggleMenu;

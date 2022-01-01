import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Sliderdata } from "./Sliderdata";
function Slider() {
  const [slider, setslider] = useState(0);
  const [touchstart, settouchstart] = useState(0);
  const [touchend, settouchend] = useState(0);

  const timeoutref = useRef(null);
  const length = Sliderdata.length;
  const sliderprev = () => {
    setslider(slider === 0 ? length - 1 : slider - 1);
  };
  const slidernext = () => {
    setslider(slider === length - 1 ? 0 : slider + 1);
  };
  // slider swipe
  const ontouchstart = (e) => {
    settouchstart(e.clientX);
  };
  const ontouchmove = (e) => {
    settouchend(e.clientX);
  };
  const ontouchend = () => {
    if (touchstart - touchend > 150) {
      slidernext();
    }
    if (touchstart - touchend < -150) {
      sliderprev();
    }
  };
  const resettimeout = () => {
    if (timeoutref.current) {
      clearTimeout(timeoutref.current);
    }
  };

  useEffect(() => {
    resettimeout();
    timeoutref.current = setTimeout(() => {
      setslider((prev) => (slider === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => {
      resettimeout();
    };
  }, [slider, length]);
  return (
    <>
      <div
        className="Slider"
        onMouseDown={(e) => ontouchstart(e)}
        onMouseMove={(e) => ontouchmove(e)}
        onMouseUp={ontouchend}
      >
        {Sliderdata.map((item, index) => {
          return (
            <div key={item.id}>
              <div
                className={slider === index ? "sliderimg active" : "sliderimg"}
              >
                {index === slider && <img src={item.src} alt="" />}
              </div>
              <div className="Slider_darkness">
                {index === slider && (
                  <div className="SliderInner_Div">
                    <p className="Slider_InText1">Men Collaction 2018</p>
                    <p className="Slider_InText2">New Season</p>
                    <div className="btn_Slider ">
                      <a href="/">Shop Now</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div className="Slider_leftsideIcon" onClick={sliderprev}>
          <AiFillCaretLeft />
        </div>
        <div className="Slider_rightsideIcon" onClick={slidernext}>
          <AiFillCaretRight />
        </div>
      </div>
    </>
  );
}

export default Slider;

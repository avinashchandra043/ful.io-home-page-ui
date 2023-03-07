import React from "react";
import "./Testimonials.css";
import T1 from "../assets/T1.webp";
function Testimonials(props) {
  return (
    <div className="tmList">
      <div className="tmListUp">
        <div className="tmImg">
          <img src={props.img} alt="" />
        </div>
        <div>
          <div className="tmName">{props.name}</div>
          <div className="tmProf">{props.prof}</div>
        </div>
      </div>
      <div className="tmInfo">{props.title}</div>
    </div>
  );
}

export default Testimonials;

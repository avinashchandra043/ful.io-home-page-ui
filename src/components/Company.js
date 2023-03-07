import React, { useEffect } from "react";
import "./Company.css";
import L1 from "../assets/L1.png";
import L2 from "../assets/L2.png";
import L3 from "../assets/L3.png";
import L4 from "../assets/L4.png";
import L6 from "../assets/L6.png";
import L7 from "../assets/L7.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Company() {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);
  return (
    <div className="company" data-aos="fade-up">
      <div className="companyBox">
        <div className="eachCompanyBox">
          <img src={L1} alt="" />
        </div>
        <div className="eachCompanyBox">
          <img src={L2} alt="" />
        </div>
        <div className="eachCompanyBox">
          <img src={L3} alt="" />
        </div>
        <div className="eachCompanyBox">
          <img src={L4} alt="" />
        </div>
        <div className="eachCompanyBox">
          <img src={L6} alt="" />
        </div>
        <div className="eachCompanyBox">
          <img src={L7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Company;

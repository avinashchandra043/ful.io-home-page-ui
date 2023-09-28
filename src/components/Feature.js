import React, { useEffect } from "react";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";

import "./Feature.css";

const Feature = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);

  const featureItems = [
    {
      imgSrc: F1,
      title: "Technology Reports",
      description:
        "Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites.",
    },
    {
      imgSrc: F2,
      title: "Rich Data",
      description:
        "Technology Reports include email, phone numbers, and website profiling metadata like IP, Hostname, DNS, titles, and other information.",
    },
    {
      imgSrc: F3,
      title: "Email Verification",
      description:
        "Industry-leading 9-step email verification engine. Never worry about email non-delivery again!",
    },
    {
      imgSrc: F4,
      title: "Zone Files",
      description:
        "Download lists of active domains across 100s of gTLDs and ccTLDs updated daily.",
    },
    {
      imgSrc: F5,
      title: "Deep Search",
      description:
        "Custom deploy our technology to search domains for contact information.",
    },
  ];

  return (
    <div className="feature">
      <div className="fHead">Power Your Sales And Marketing Teams</div>
      <div className="fIcons">
        {featureItems.map((item, index) => (
          <div className="fI" key={index}>
            <div className="fIcon" data-aos="fade-up">
              <div className="fIconImg">
                <img src={item.imgSrc} alt="" />
              </div>
              <div className="fIconHead">{item.title}</div>
              <div className="fIconTitle">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="fButton">
        <div className="fBut">
          <Button variant="contained">Try for Free</Button>
        </div>
        <div className="fBut">
          <Button variant="contained">How we are Better</Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;

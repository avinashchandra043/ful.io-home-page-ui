import React, { useEffect } from "react";
import "./Feature.css";
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
function Feature() {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);
  return (
    <div className="feature">
      <div className="fHead">Power Your Sales And Marketing Teams</div>
      <div className="fIcons">
        <div className="fI">
          <div className="fIcon" data-aos="fade-up">
            <div className="fIconImg">
              <img src={F1} alt="" />
            </div>
            <div className="fIconHead">Technology Reports</div>
            <div className="fIconTitle">
              Download lists of websites using a specific technology. We track
              over 3,000 technologies across 280+ million websites.
            </div>
          </div>
        </div>
        <div className="fI">
          <div className="fIcon" data-aos="fade-up">
            <div className="fIconImg">
              <img src={F2} alt="" />
            </div>
            <div className="fIconHead">Rich Data</div>
            <div className="fIconTitle">
              Technology Reports include email, phone numbers, and website
              profiling metadata like IP, Hostname, DNS, titles, and other
              information.
            </div>
          </div>
        </div>
        <div className="fI">
          <div className="fIcon" data-aos="fade-up">
            <div className="fIconImg">
              <img src={F3} alt="" />
            </div>
            <div className="fIconHead">Email Verification</div>
            <div className="fIconTitle">
              Industry-leading 9-step email verification engine. Never worry
              about email non-delivery again!
            </div>
          </div>
        </div>{" "}
        <div className="fI">
          <div className="fIcon" data-aos="fade-up">
            <div className="fIconImg">
              <img src={F4} alt="" />
            </div>
            <div className="fIconHead">Zone Files</div>
            <div className="fIconTitle">
              Download lists of active domains across 100s of gTLDs and ccTLDs
              updated daily.
            </div>
          </div>
        </div>{" "}
        <div className="fI">
          <div className="fIcon" data-aos="fade-up">
            <div className="fIconImg">
              <img src={F5} alt="" />
            </div>
            <div className="fIconHead">Deep Search</div>
            <div className="fIconTitle">
              Custom deploy our technology to search domains for contact
              information.
            </div>
          </div>
        </div>
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
}

export default Feature;

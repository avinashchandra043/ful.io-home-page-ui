import React, { useEffect } from "react";
import "./Def.css";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
function Def() {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);
  return (
    <div className="defo" data-aos="fade-up">
      <div className="def">
        <div className="def1">
          <div>🎉 73821 new domains added on 22 February 2023</div>
          <div>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="def2">What Is The Web Built On?</div>
        <div className="def3">
          <div> Uncover the technology stack behind any website.</div>
          <div>
            Use our tools for lead generation, market analysis and competitor
            research.
          </div>
        </div>
        <div className="def4">
          <div>
            <input type="text" placeholder="Enter URL for Lookup" />
          </div>
          <div className="defBut">
            <Button variant="contained">Search</Button>
          </div>
        </div>
        <div className="def5">
          We periodically scan <b>213,240,178</b> websites and provide
          up-to-date information.
        </div>
      </div>
    </div>
  );
}

export default Def;

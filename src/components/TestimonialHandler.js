import React, { useEffect } from "react";
import Testimonials from "./Testimonials";
import "./Testimonials.css";
import T1 from "../assets/T1.webp";
import T2 from "../assets/T2.webp";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.webp";
import T5 from "../assets/T5.webp";
import T6 from "../assets/T6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function TestimonialHandler() {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);
  return (
    <div className="tm">
      <div>
        <div className="tmHead">Testimonials</div>
        <div className="tmLists">
          <div data-aos="fade-up">
            <Testimonials
              img={T1}
              name={"Todd Dunsmore"}
              prof={"Doja Marketing/Defi Founder"}
              title={
                "These web technologies quickly became a game-changer for our business. Lead generation projects that used to take a whole team are completely automatic now. We were able to segment traffic based on location, identify more prospects, and onboard more clients. I can't say enough good things about Ful.io."
              }
            />
          </div>
          <div data-aos="fade-up">
            <Testimonials
              img={T2}
              name={"Nicholas Altimore"}
              prof={"Sirlinksalot"}
              title={
                "Companies need an edge, and Ful.io provided that edge for us. We'd previously used BuiltWith, but the data and analytics capabilities of Ful.io were a better fit for us."
              }
            />
          </div>
          <div data-aos="fade-up">
            <Testimonials
              img={T3}
              name={"Chris Richards"}
              prof={"Utterly Digital"}
              title={
                "We used to manually upload contact details and other data, but it took way too long. We needed a solution that could automate the process and free up resources. Ful.io just works for us. Their technology is incredible."
              }
            />
          </div>
          <div data-aos="fade-up">
            <Testimonials
              img={T4}
              name={"Robert Kaene"}
              prof={"The Wednesday Club"}
              title={
                "Ful.io's apps and tools have completely changed the way we look at traffic and identify prospects. Before, our R&D team tried BuiltWith, then worked to develop our own technology. But with Ful.io, we can save both time and money."
              }
            />
          </div>
          <div data-aos="fade-up">
            <Testimonials
              img={T5}
              name={"Mad Singers"}
              prof={"SEO Mastery Summit"}
              title={
                "We're always looking for new ways to boost our advertising efforts and analyze websites to improve our processes. Ful.io has been a perfect partner throughout. We've been able to discover more valuable data on prospects than we ever did on our own."
              }
            />
          </div>
          <div data-aos="fade-up">
            <Testimonials
              img={T6}
              name={"Yana L"}
              prof={"SEO Consultant"}
              title={
                "Any ecommerce platform not using Ful.io's technologies is seriously missing out. The crawling tool at Ful.io is the best we've used so far. We love that you can pull it up right in the Chrome browser too. Location, contact info, RSS, the speed we can draw in new clients now... Ful.io is amazing."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialHandler;

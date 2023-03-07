import React, { useEffect } from "react";
import Card from "./Card";
import C1 from "../assets/C1.png";
import C1S from "./C1S";
import C2 from "../assets/C2.png";
import C3 from "../assets/C3.png";
import C4 from "../assets/C4.png";
import Aos from "aos";
import "aos/dist/aos.css";

function CardHandler() {
  useEffect(() => {
    Aos.init({
      offset: 500,
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up">
        <Card
          h1="Data Enrichment"
          logo={<C1S />}
          h2="Our data is available for all your general purpose tools"
          title="Import your website list and our technology stack will do all the heavy lifting, pulling contact information that would take weeks or months to gather with traditional market research methods. Our tools and technologies crawl and scan websites completely autonomously."
          p1="Website lookup capabilities and technology comparable to the best in the industry."
          p2="Generate high quality leads with our technology reports."
          p3="Identify technographic segmentation."
          banner={C1}
          check={true}
        />
      </div>
      <div data-aos="fade-up">
        <Card
          h1="Security Reconnaissance"
          logo={<C1S />}
          h2="Your security is our top priority."
          title="Security professionals worldwide use our web technologies. This solution helps you track security threats on your website. The technology also provides you with detailed information on vulnerabilities and exploitation risks."
          p1="Track your own and your competitors' technology trends."
          p2="Effectively assess the depth of technology penetration."
          p3="Identify bugs and the impact of patches."
          banner={C2}
          check={false}
        />
      </div>
      <div data-aos="fade-up">
        <Card
          h1="Email Verification"
          logo={<C1S />}
          h2="Never worry about non-delivery of your emails"
          title="Our email extension technology verifies deliverability and checks the server connection to ensure that your email delivery rate remains high, keeping you off the contact blocklist. Our technologies allow us to do all of this without having to send an email to the contact."
          p1="Get immediate results and a responsive, intuitive UX with our technology."
          p2="Start with 100 free email verifications every month."
          p3="Top up email verification credits on the go."
          banner={C3}
          check={true}
        />
      </div>
      <div data-aos="fade-up">
        <Card
          h1="APIs"
          logo={<C1S />}
          h2="Get unlimited access to our APIs"
          title="With Ful.io APIs, you have access to any technology stack, contact details, relevant social handles, and much more. Much like BuiltWith, our technology lets you analyze many websites at once, track data on technology usage, and even build your own analytics dataset."
          p1="Get results right away and update your datasets in real-time."
          p2="Our technologies let you easily analyze multiple websites at once."
          p3="Take advantage of a free trial before signing up."
          banner={C4}
          check={false}
        />
      </div>
    </div>
  );
}

export default CardHandler;

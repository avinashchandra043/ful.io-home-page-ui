import React from "react";
import "./Footer.css";
import Icon from "./Icon";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="fup">
          <div className="f1">
            <div className="headIcon">
              <Icon />
            </div>
            <div>© 2023 Ful, Inc.</div>
            <div>All rights reserved</div>
            <div className="fuI">
              <div>
                <FacebookRoundedIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="f2">
            <div>Features</div>
            <hr />
            <div>Check Domain</div>
            <div>Email Verification</div>
            <div>Zone Files Downloads</div>
            <div>Category Search</div>
            <div>Technology Search</div>
          </div>
          <div className="f2">
            <div>Top Technology Reports</div>
            <hr />
            <div>Websites using Nginx</div>
            <div>Websites using JQuery</div>
            <div>Websites using MySQL</div>
            <div>Websites using Shopify</div>
            <div>Websites using WooCommerce</div>
          </div>
          <div className="f2">
            <div>More to know</div>
            <hr />
            <div>Feature Comparisons</div>
            <div>Pricing</div>
            <div>Careers</div>
            <div>Terms of Use</div>
            <div>About Us</div>
          </div>
          <div className="f2">
            <div>Contact</div>
            <hr />
            <div>support@ful.io</div>
            <div>+1 343 303 6668</div>
            <div>Ful, Inc. 1207 Delaware Ave #348 Wilmington, DE 19806</div>
          </div>
        </div>
        <div className="fM">Made with ❤️ in Bangalore</div>
      </div>
    </div>
  );
}

export default Footer;

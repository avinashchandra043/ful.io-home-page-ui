import React from "react";
import "./Header.css";
import Waves from "./Waves";
import LeftArrow from "./LeftArrow";
import Icon from "./Icon";

function Header() {
  const changeSubMenu = () => {
    document.getElementById("subMenu").classList.toggle("changeSubMenu1");
    if (
      document.getElementById("subMenu").classList.contains("changeSubMenu1")
    ) {
      document.getElementById("downArrow").style.display = "none";
      document.getElementById("upArrow").style.display = "block";
    } else {
      document.getElementById("downArrow").style.display = "block";
      document.getElementById("upArrow").style.display = "none";
    }
  };
  const myFunc = () => {
    document.getElementById("lc").classList.toggle("change");
    document.getElementById("cS").classList.toggle("changeSideBarDisplay");
  };
  return (
    <>
      <div className="header">
        <div className="leftHeader">
          <div className="headIcon">
            <Icon />
          </div>
        </div>
        <div className="midHeader">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a onClick={changeSubMenu}>
                <div className="subMenu">
                  <div>Features</div>
                  <div id="upArrow">
                    <svg
                      fill="#fff"
                      height="10px"
                      width="10px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path
                        id="XMLID_224_"
                        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
        l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
        C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                      />
                    </svg>
                  </div>
                  <div id="downArrow">
                    <svg
                      fill="#fff"
                      height="10px"
                      width="10px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <div id="subMenu" className="sub_menu_1">
                <ul>
                  <li>
                    <a href="#">Technology Search</a>
                  </li>
                  <li>
                    <a href="#">Category Search</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Email Verification</a>
                  </li>
                  <li>
                    <a href="#">Proffessional Domain Data</a>
                  </li>
                  <li>
                    <a href="#">Technology Compare</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Keyword Search</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="rightHeader">
          <div>Login</div>
          <div className="signUp">Sign up</div>
        </div>
      </div>
      <div className="headerMobile1">
        <div className="headerMobile">
          <div className="leftHeaderMobile">
            <div className="headIcon">
              <Icon />
            </div>
          </div>
          <div className="line_container" id="lc" onClick={myFunc}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div id="cS" className="sideBar changeSideBarDisplay">
          <div className="sub_menu_sidebar">
            <ul>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Home</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Category Search</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Technology Search</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Proffessional Domain Data</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Technology Compare</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Keyword Search</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Pricing</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Blog</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sideBarContent">
                    <div className="text_sidbar">Logout</div>
                    <div className="leftArrow">
                      <LeftArrow />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

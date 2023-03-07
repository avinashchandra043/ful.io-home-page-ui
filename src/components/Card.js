import React, { useEffect } from "react";
import "./Card.css";
import C1S from "./C1S";

function Card(props) {
  return (
    <div className="card">
      <div className="cardin">
        {props.check ? (
          <div>
            <div className="cardImage">
              <img src={props.banner} alt="" />
            </div>
            <div className="cardText">
              <div className="head1">{props.h1}</div>
              <div className="head2">{props.h2}</div>
              <div className="title">{props.title}</div>
              Key Highlights:
              <div className="points">
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p1}</div>
                </div>
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p2}</div>
                </div>
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p3}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cardRev">
            <div className="cardImage">
              <img src={props.banner} alt="" />
            </div>
            <div className="cardText">
              <div className="head1">{props.h1}</div>
              <div className="head2">{props.h2}</div>
              <div className="title">{props.title}</div>
              Key Highlights:
              <div className="points">
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p1}</div>
                </div>
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p2}</div>
                </div>
                <div className="point">
                  <div>
                    <C1S />
                  </div>
                  <div>{props.p3}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

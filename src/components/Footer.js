import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="footer__text">US Market</div>
        <div className="footer__list">
          <div>
            NASDAQ <span className="footer---dollar-sign">6,850.05</span>{" "}
            <span className="footer__price--green footer--arrowUp">
              {" "}
              72.89{" "}
            </span>{" "}
            <span className={"footer__price--green footer---percentage-sign"}>
              1.08
            </span>
          </div>
          <div>
            DJIA<span className="footer---dollar-sign">23,026.35</span>{" "}
            <span className="footer__price--green footer--arrowUp">
              {" "}
              165.89{" "}
            </span>{" "}
            <span className="footer__price--green footer---percentage-sign">
              0.7
            </span>
          </div>
          <div>
            S&P<span className="footer---dollar-sign">2,605.35</span>{" "}
            <span className="footer__price--green footer--arrowUp">
              {" "}
              23.35{" "}
            </span>{" "}
            <span className="footer__price--green footer---percentage-sign">
              0.94
            </span>
          </div>
        </div>
      </div>
      <div className="footer__items">
        <div className="footer__text">Favourite</div>
        <div className="footer__list">
          <div>
            MSFT<span className="footer---dollar-sign">86.92</span>{" "}
            <span className="footer__price--green footer--arrowUp"> 1.91 </span>{" "}
            <span className="footer__price--green footer---percentage-sign">
              2.25
            </span>
          </div>
          <div>
            AAPL<span className="footer---dollar-sign">160.03</span>{" "}
            <span className="footer__price--red footer--arrowDown"> 2.94 </span>{" "}
            <span className="footer__price--red footer---percentage-sign">
              1.88
            </span>
          </div>
          <div>
            GOOG<span className="footer---dollar-sign">1,017.49</span>{" "}
            <span className="footer__price--green footer--arrowUp">
              {" "}
              15.97{" "}
            </span>{" "}
            <span className="footer__price--green footer---percentage-sign">
              1.59
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

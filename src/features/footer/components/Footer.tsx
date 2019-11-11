import React, { FC } from "react";
import "./Footer.css";
import { FooterItem } from "./FooterItem";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="footer__text">US Market</div>
        <div className="footer__list">
          <FooterItem
            exchange="NASDAQ"
            price={6850.05}
            priceChange={72.89}
            percentageChange={1.08}
          />
          <FooterItem
            exchange="DJIA"
            price={23026.35}
            priceChange={165.89}
            percentageChange={0.7}
          />
          <FooterItem
            exchange="S&amp;P"
            price={2605.35}
            priceChange={23.35}
            percentageChange={0.94}
          />
        </div>
      </div>
      <div className="footer__items">
        <div className="footer__text">Favorites</div>
        <div className="footer__list">
          <FooterItem
            exchange="MSFT"
            price={86.92}
            priceChange={1.91}
            percentageChange={2.25}
          />
          <FooterItem
            exchange="AAPL"
            price={160.03}
            priceChange={-2.94}
            percentageChange={-1.88}
          />
          <FooterItem
            exchange="GOOG"
            price={1017.49}
            priceChange={15.97}
            percentageChange={1.59}
          />
        </div>
      </div>
    </div>
  );
};

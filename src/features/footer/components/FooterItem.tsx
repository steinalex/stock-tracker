import React from "react";

const NUMBER_FORMATTER = new Intl.NumberFormat();
const getSign = (value: number) => (value > 0 ? "positive" : "negative");

const signFormat = (value: number) => {
  return getSign(value);
};

type FooterData = {
  exchange: string;
  price: number;
  priceChange: number;
  percentageChange: number;
};

export const FooterItem = ({
  exchange,
  price,
  priceChange,
  percentageChange
}: FooterData) => {
  const priceChangeSign = signFormat(priceChange);
  const percentageChangeSign = signFormat(percentageChange);

  return (
    <div>
      <span className="footer__list__exchange">{exchange}</span>
      <span className="footer__dollar-sign">
        {NUMBER_FORMATTER.format(price)}
      </span>
      <span
        className={`footer__price--${priceChangeSign} footer--${priceChangeSign}`}
      >
        {Math.abs(priceChange)}
      </span>
      <span
        className={`footer__price--${percentageChangeSign} footer__percentage-sign`}
      >
        {Math.abs(percentageChange)}
      </span>
    </div>
  );
};

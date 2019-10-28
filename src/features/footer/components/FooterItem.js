import React from "react";

const NUMBER_FORMATTER = new Intl.NumberFormat();
const getSign = value => (value > 0 ? "positive" : "negative");

export const FooterItem = ({
  exchange,
  price,
  priceChange,
  percentageChange
}) => {
  const roundValue = parseFloat(
    Math.round(priceChange * 100 * 100) / 100
  ).toFixed(2);
  return (
    <div>
      <span className="footer__list__exchange">{exchange}</span>
      <span className="footer__dollar-sign">
        {NUMBER_FORMATTER.format(price)}
      </span>
      <span
        className={`footer__price--${getSign(roundValue)} footer--${getSign(
          roundValue
        )}`}
      >
        {Math.abs(priceChange)}
      </span>
      <span
        className={`footer__price--${getSign(
          percentageChange
        )} footer__percentage-sign`}
      >
        {Math.abs(percentageChange)}
      </span>
    </div>
  );
};

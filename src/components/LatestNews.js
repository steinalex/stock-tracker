import React from "react";
import moment from "moment";

const timeFormat = date => moment(date).fromNow();

const LatestNews = ({ stock }) => (
  <div className="latest-news">
    <h1 className="title">Latest News</h1>
    {stock === null ? (
      <div className="loading-spinner"></div>
    ) : stock.length === 0 ? (
      <div> N/A </div>
    ) : (
      <div className="latest-news__grid">
        {stock.map(data => (
          <div className="latest-news__wrapper">
            <div className="latest-news__text">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="latest-news__link"
                href={`${data.url}`}
              >
                {data.headline}
              </a>
            </div>
            <div className="latest-news__source">
              {timeFormat(data.date)} - {data.source}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default LatestNews;

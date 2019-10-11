import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const timeFormat = date => moment(date).fromNow();

const LatestNews = () => {
  const state = useSelector(state => state);
  const latestNews = state.selectedLatestNews;
  return (
    <div className="latest-news">
      <h1 className="title">Latest News</h1>
      {latestNews === null ? (
        <div className="loading-spinner"></div>
      ) : latestNews.length === 0 ? (
        <div> N/A </div>
      ) : (
        <div className="latest-news__grid">
          {latestNews.map(data => (
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
};

export default LatestNews;

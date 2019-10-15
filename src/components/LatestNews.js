import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";

const timeFormat = date => moment(date).fromNow();

const LatestNews = () => {
  const latestNews = useSelector(
    state => state.referenceData.selectedLatestNews
  );

  const renderLatestNewsComponent = () => (
    <div className="latest-news__grid">
      {latestNews.length !== 0 ? (
        latestNews.map(data => (
          <div key={data.headline} className="latest-news__wrapper">
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
        ))
      ) : (
        <ErrorMessage message="News N/A" />
      )}
    </div>
  );

  return (
    <div className="latest-news">
      <h1 className="title">Latest News</h1>
      <Loading
        loaded={latestNews !== null}
        render={renderLatestNewsComponent}
      />
    </div>
  );
};

export default LatestNews;

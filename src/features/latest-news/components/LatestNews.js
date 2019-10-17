import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Loading } from "../../loading/components/Loading";
import { ErrorMessage } from "../../error-message/components";
import "./LatestNews.css";

const timeFormat = date => moment(date).fromNow();

export const LatestNews = () => {
  const { selectedLatestNews } = useSelector(state => state.latestNewsData);

  const renderLatestNewsComponent = () => (
    <div className="latest-news__grid">
      {selectedLatestNews.length !== 0 ? (
        selectedLatestNews.map(data => (
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
        loaded={selectedLatestNews !== null}
        render={renderLatestNewsComponent}
      />
    </div>
  );
};

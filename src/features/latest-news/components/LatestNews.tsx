import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Loading } from "../../loading";
import { ErrorMessage } from "../../error-message";
import "./LatestNews.css";
import { AppState } from "../../../store";

const timeFormat = (date: string) => moment(date).fromNow();

export const LatestNews = () => {
  const { selectedLatestNews } = useSelector(
    (state: AppState) => state.latestNewsData
  );

  const renderLatestNewsComponent = () => (
    <div className="latest-news__grid">
      {selectedLatestNews && selectedLatestNews.length !== 0 ? (
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

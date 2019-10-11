import React from "react";
import Peers from "./Peers";
import { useSelector } from "react-redux";

export const Company = () => {
  const state = useSelector(state => state);
  const companyOverview = state.selectedCompanyOverview;
  return (
    <div className="company-overview">
      <h1 className="title">Company Overview</h1>
      {companyOverview === null ? (
        <div className="loading-spinner"></div>
      ) : Object.keys(companyOverview).length === 0 ? (
        <div> N/A </div>
      ) : (
        <>
          <div className="company-overview__title">
            {companyOverview.companyName} ({companyOverview.symbol})
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="company-overview__website"
              href={`${companyOverview.website}`}
            >
              {companyOverview.website}
            </a>{" "}
          </div>
          <div className="company-overview__text">
            <p>{companyOverview.description}</p>
          </div>
        </>
      )}
      <Peers stock={state.selectedTopPeers} />
    </div>
  );
};

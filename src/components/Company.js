import React from "react";
import Peers from "./Peers";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";

export const Company = () => {
  const companyOverview = useSelector(state => state.selectedCompanyOverview);

  const renderCompanyComponent = () => (
    <>
      <div className="company-overview__title">
        {companyOverview.companyName || "N/A"} (
        {companyOverview.symbol || "N/A"})
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="company-overview__website"
          href={`${companyOverview.website}`}
        >
          {companyOverview.website || "N/A"}
        </a>
      </div>
      <div className="company-overview__text">
        <p>{companyOverview.description || "N/A"}</p>
      </div>
    </>
  );

  return (
    <div className="company-overview">
      <h1 className="title">Company Overview</h1>
      <Loading
        loaded={companyOverview !== null}
        render={renderCompanyComponent}
      />
      <Peers peers={useSelector(state => state.selectedTopPeers)} />
    </div>
  );
};

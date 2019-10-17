import React from "react";
import { Peers } from "../../peers/components";
import { useSelector } from "react-redux";
import { Loading } from "../../loading/components/Loading";
import "./Company.css";

export const Company = () => {
  const { selectedCompanyOverview, selectedTopPeers } = useSelector(
    state => state.referenceData
  );

  const renderCompanyComponent = () => (
    <>
      <div className="company-overview__title">
        {selectedCompanyOverview.companyName || "N/A"} (
        {selectedCompanyOverview.symbol || "N/A"})
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="company-overview__website"
          href={`${selectedCompanyOverview.website}`}
        >
          {selectedCompanyOverview.website || "N/A"}
        </a>
      </div>
      <div className="company-overview__text">
        <p>{selectedCompanyOverview.description || "N/A"}</p>
      </div>
    </>
  );

  return (
    <div className="company-overview">
      <h1 className="title">Company Overview</h1>
      <Loading
        loaded={selectedCompanyOverview !== null}
        render={renderCompanyComponent}
      />
      <Peers peers={selectedTopPeers} />
    </div>
  );
};

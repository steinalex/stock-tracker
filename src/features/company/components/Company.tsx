import React, { FC } from "react";
import { Peers } from "../../peers";
import { useSelector } from "react-redux";
import { Loading } from "../../loading";
import "./Company.css";
import { AppState } from "store";

export const Company: FC = () => {
  const { selectedCompanyOverview } = useSelector(
    (state: AppState) => state.companyOverviewData
  );
  const { selectedTopPeers } = useSelector((state: AppState) => state.peerData);

  const renderCompanyComponent = () => (
    <>
      <div className="company-overview__title">
        {`${(selectedCompanyOverview && selectedCompanyOverview.companyName) ||
          "N/A"} (${(selectedCompanyOverview &&
          selectedCompanyOverview.symbol) ||
          "N/A"})`}
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="company-overview__website"
          href={`${selectedCompanyOverview && selectedCompanyOverview.website}`}
        >
          {(selectedCompanyOverview && selectedCompanyOverview.website) ||
            "N/A"}
        </a>
      </div>
      <div className="company-overview__text">
        <p>
          {(selectedCompanyOverview && selectedCompanyOverview.description) ||
            "N/A"}
        </p>
      </div>
    </>
  );

  return (
    <div className="company-overview">
      <h1 className="title">Company Overview</h1>
      <Loading
        loaded={selectedCompanyOverview !== undefined}
        render={renderCompanyComponent}
      />
      <Peers peers={selectedTopPeers} />
    </div>
  );
};

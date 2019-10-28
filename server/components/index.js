const { sectorInformation } = require("./sectorInformation");
const { topPeers } = require("./topPeers");
const { companyOverview } = require("./companyOverview");
const { latestNewsInterval } = require("./latestNewsInterval");
const { keyStats } = require("./keyStats");
const { stockTicker } = require("./stockTicker");
const { chartData } = require("./chartData");
const { searchQuery } = require("./searchQuery");
const { getAllCompanies } = require("./getAllCompanies");

module.exports = {
  sectorInformation,
  topPeers,
  companyOverview,
  latestNewsInterval,
  keyStats,
  stockTicker,
  chartData,
  searchQuery,
  getAllCompanies
};

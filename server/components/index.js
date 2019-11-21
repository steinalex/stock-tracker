const { emitTopPeers } = require("./topPeers");
const { emitCompanyOverview } = require("./companyOverview");
const { emitKeyStats } = require("./keyStats");
const { emitStockTicker } = require("./stockTicker");
const { emitSearchQuery } = require("./searchQuery");
const { getAllCompanies } = require("./allCompanies");

module.exports = {
  emitTopPeers,
  emitCompanyOverview,
  emitKeyStats,
  emitStockTicker,
  emitSearchQuery,
  getAllCompanies
};

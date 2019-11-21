const { emitTopPeers } = require("./topPeers");
const { emitCompanyOverview } = require("./companyOverview");
const { emitStockTicker } = require("./stockTicker");
const { emitSearchQuery } = require("./searchQuery");
const { getAllCompanies } = require("./allCompanies");

module.exports = {
  emitTopPeers,
  emitCompanyOverview,
  emitStockTicker,
  emitSearchQuery,
  getAllCompanies
};

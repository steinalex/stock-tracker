const { emitSectorInformation } = require("./sectorInformation");
const { emitTopPeers } = require("./topPeers");
const { emitCompanyOverview } = require("./companyOverview");
const { emitLatestNews } = require("./latestNews");
const { emitKeyStats } = require("./keyStats");
const { emitStockTicker } = require("./stockTicker");
const { emitChartData } = require("./chartData");
const { emitSearchQuery } = require("./searchQuery");
const { emitAllCompanies } = require("./allCompanies");

module.exports = {
  emitSectorInformation,
  emitTopPeers,
  emitCompanyOverview,
  emitLatestNews,
  emitKeyStats,
  emitStockTicker,
  emitChartData,
  emitSearchQuery,
  emitAllCompanies
};

const { getNews } = require("./components/latestNews");
const { getSectorInformation } = require("./components/sectorInformation");
const { getChart } = require("./components/chartData");
const { getKeyStats } = require("./components/keyStats");
const { getCompanyOverview } = require("./components/companyOverview");
const { getTopPeers } = require("./components/topPeers");

const TOKEN = process.env.TOKEN;
const HOST = "https://sandbox.iexapis.com/stable";

const sectorInformation = getSectorInformation(HOST, TOKEN);
const newsService = getNews(HOST, TOKEN);
const chartService = getChart(HOST, TOKEN);
const keyStatsService = getKeyStats(HOST, TOKEN);
const companyOverviewService = getCompanyOverview(HOST, TOKEN);
const topPeersService = getTopPeers(HOST, TOKEN);

const requestReply = async (socket, promise, replyTo) => {
  try {
    const result = await promise;
    socket.emit(replyTo, { status: "OK", data: result });
  } catch (err) {
    socket.emit(replyTo, { status: "ERROR" });
  }
};

exports.handleConnection = socket => {
  console.info("New client connected");

  socket.on("getSectorData", async (replyTo, stockName) => {
    requestReply(socket, sectorInformation(stockName), replyTo);
  });

  socket.on("getNews", async (replyTo, stockName) => {
    requestReply(socket, newsService(stockName), replyTo);
  });

  socket.on("getChart", async (replyTo, stockName, timeRange) => {
    requestReply(socket, chartService(stockName, timeRange), replyTo);
  });

  socket.on("getKeyStats", async (replyTo, stockName) => {
    requestReply(socket, keyStatsService(stockName), replyTo);
  });

  socket.on("getCompanyOverview", async (replyTo, stockName) => {
    requestReply(socket, companyOverviewService(stockName), replyTo);
  });

  socket.on("getTopPeers", async (replyTo, stockName) => {
    requestReply(socket, topPeersService(stockName, companySymbols), replyTo);
  });

  socket.on("disconnect", () => {
    console.info("Client disconnected");
  });
};

// socket.on("getStockTicker", async stockName => {
//   if (stockName === "") {
//     return false;
//   }
//   console.info("Stock entered: ", stockName);
//   Object.values(timerIDs).forEach(clearInterval);
//   timerIDs.stockTicker = callAndStartIntervals(
//     emitStockTicker,
//     5000,
//     socket,
//     stockName,
//     HOST,
//     TOKEN
//   );
// });

//   socket.on("enteredSearchQuery", inputQuery => {
//     emitSearchQuery(socket, inputQuery, allSymbols);
//   });

//};

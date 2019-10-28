const {
  sectorInformation,
  topPeers,
  companyOverview,
  latestNewsInterval,
  keyStats,
  stockTicker,
  chartData,
  searchQuery,
  getAllCompanies
} = require("./components");

const TOKEN = process.env.TOKEN;
const HOST = "https://sandbox.iexapis.com/stable";

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

function callAndStartIntervals(fn, interval, ...args) {
  fn(...args);
  return setInterval(() => fn(...args), interval);
}

const handleConnection = socket => {
  const timerIDs = {};
  const allSymbols = getAllCompanies(HOST, TOKEN);
  console.info("New client connected");

  socket.on("stockName", async (stockName, timeRange) => {
    if (stockName === "") {
      return false;
    }
    console.info("Stock entered: ", stockName);
    Object.values(timerIDs).forEach(clearInterval);
    timerIDs.stockTicker = callAndStartIntervals(
      stockTicker,
      5000,
      socket,
      stockName,
      HOST,
      TOKEN
    );
    timerIDs.keyStats = callAndStartIntervals(
      keyStats,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      HOST,
      TOKEN
    );
    timerIDs.latestNews = callAndStartIntervals(
      latestNewsInterval,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      HOST,
      TOKEN
    );
    timerIDs.companyOverview = callAndStartIntervals(
      companyOverview,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      HOST,
      TOKEN
    );
    timerIDs.topPeers = callAndStartIntervals(
      topPeers,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      HOST,
      TOKEN,
      allSymbols
    );
    timerIDs.chartData = callAndStartIntervals(
      chartData,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      timeRange,
      HOST,
      TOKEN
    );
    timerIDs.sectorInformation = callAndStartIntervals(
      sectorInformation,
      ONE_DAY_IN_MS,
      socket,
      stockName,
      HOST,
      TOKEN
    );
  });

  socket.on("searchQuery", inputQuery => {
    searchQuery(socket, inputQuery, allSymbols);
  });

  socket.on("timeRange", (stockName, timeRange) => {
    chartData(socket, stockName, timeRange, HOST, TOKEN);
  });

  socket.on("disconnect", () => {
    Object.values(timerIDs).forEach(clearInterval);
    console.info("Client disconnected");
  });
};

exports.handleConnection = handleConnection;

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4000;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

const oneDay = 24 * 60 * 60 * 1000;

io.on("connection", socket => {
  const timerIDs = {}
  console.log("New client connected");
  socket.on("stockName", async (stockName, timeRange) => {
    if (stockName === "") { return false }
    console.log("Stock entered: ", stockName)

    Object.values(timerIDs).forEach(clearInterval);

    stockTickerInterval(socket, stockName);
    keyStatsInterval(socket, stockName);
    latestNewsInterval(socket, stockName);
    companyOverviewInterval(socket, stockName);
    topPeersInterval(socket, stockName);
    companySymbolsInterval(socket);
    chartDataInterval(socket, stockName, timeRange);
    sectorInformationInterval(socket, stockName);

    timerIDs.stockTicker = setInterval(() => { //Done
      stockTickerInterval(socket, stockName);
    }, 5000);
    timerIDs.keyStats = setInterval(() => { //Done
      keyStatsInterval(socket, stockName);
    }, oneDay);
    timerIDs.latestNews = setInterval(() => {//Done
      latestNewsInterval(socket, stockName);
    }, oneDay);
    timerIDs.companyOverview = setInterval(() => { //Done
      companyOverviewInterval(socket, stockName);
    }, oneDay);
    timerIDs.topPeers = setInterval(() => { //Done
      topPeersInterval(socket, stockName);
    }, oneDay);
    timerIDs.companySymbols = setInterval(() => { //Done
      companySymbolsInterval(socket);
    }, oneDay);
    timerIDs.chartData = setInterval(() => { //Done
      chartDataInterval(socket, stockName, timeRange);
    }, oneDay);
    timerIDs.sectorInformation = setInterval(() => { //Done
      sectorInformationInterval(socket, stockName);
    }, oneDay);
  });

  socket.on('timeRange', (stockName, timeRange) => {
    chartDataInterval(socket, stockName, timeRange);
  });

  socket.on("disconnect", () => {
    Object.values(timerIDs).forEach(clearInterval);
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

const HOST = 'https://sandbox.iexapis.com/stable'
const TOKEN = 'Tsk_d2f1890612194476b41d39992a3ad835'

const stockTickerInterval = async (socket, stockName, timeRange) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );

    const { latestPrice, latestTime, change, changePercent} = quote.data

    const stockTicker = {
      latestPrice,
      latestTime,
      change,
      changePercent
    }

    socket.emit("stockTicker", stockTicker);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const keyStatsInterval = async (socket, stockName, timeRange) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );
    const earnings = await axios.get(
      `${HOST}/stock/${stockName}/earnings/1/actualEPS?token=${TOKEN}`
    );

    const { companyName, symbol, currency, primaryExchange, open, high, low, previousClose, previousVolume, avgTotalVolume, marketCap, peRatio, week52High, week52Low, ytdChange, isUSMarketOpen } = quote.data

    const { EPS } = earnings.data;

    const keyStats = {
      companyName,
      symbol,
      currency,
      primaryExchange,
      open,
      high,
      low,
      previousClose,
      previousVolume,
      avgTotalVolume,
      marketCap,
      peRatio,
      week52High,
      week52Low,
      ytdChange, 
      isUSMarketOpen,
      EPS
    }

    socket.emit("keyStats", keyStats);
    console.log("Key stats sent" , keyStats)
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const latestNewsInterval = async (socket, stockName) => {

  try {
    const news = await axios.get(
      `${HOST}/stock/${stockName}/news?token=${TOKEN}`
    );

    const latestNews = {
      news1: news.data[0].headline,
      news1Source: news.data[0].source,
      news2: news.data[1].headline,
      news2Source: news.data[1].source,
      news3: news.data[2].headline,
      news3Source: news.data[2].source,
      news4: news.data[3].headline,
      news4Source: news.data[3].source,
      news5: news.data[4].headline,
      news5Source: news.data[4].source
    }

    socket.emit("latestNews", latestNews);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const companyOverviewInterval = async (socket, stockName) => {
  try {
    const company = await axios.get(
      `${HOST}/stock/${stockName}/company?token=${TOKEN}`
    );

    const { website, description } = company.data;

    const companyOverview = {
      website,
      description
    }

    socket.emit("companyOverview", companyOverview);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};


const topPeersInterval = async (socket, stockName) => {
  try {
    const peers = await axios.get(
      `${HOST}/stock/${stockName}/peers?token=${TOKEN}`
    );

    const peersList = {
      peers: peers.data.join(',')
    }

    socket.emit("peers", peersList);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const companySymbolsInterval = async (socket) => {
  try {
    const companySymbols = await axios.get(
      `${HOST}/ref-data/symbols?token=${TOKEN}`
    )
    
    const allSymbols = companySymbols.data.map(data => (data.symbol))

    socket.emit("companySymbols", allSymbols);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const chartDataInterval = async (socket, stockName) => {
  try {
    const chart = await axios.get(
      `${HOST}/stock/${stockName}/chart/${timeRange}?token=${TOKEN}`
    );
    
    const chartData = chart.data.map(data => ({close: data.close, open: data.open}))

    socket.emit("chartData", chartData);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const sectorInformationInterval = async (socket, stockName) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );
    const dividends = await axios.get(
      `${HOST}/stock/${stockName}/dividends/1y?token=${TOKEN}`
    );
    const company = await axios.get(
      `${HOST}/stock/${stockName}/company?token=${TOKEN}`
    );

    const { primaryExchange } = quote.data;
    const { currency } = dividends.data;
    const { sector } = company.data;

    const sectorInformation = {
      primaryExchange,
      currency,
      sector
    }
    
    socket.emit("sectorInformation", sectorInformation);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};
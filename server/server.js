const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4000;
const index = require("./routes");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

const oneDay = 24 * 60 * 60 * 1000;

io.on("connection", socket => {
  const timerIDs = {}
  const allSymbols = getCompanySymbols(socket);
  console.log("New client connected");
  socket.on("stockName", async (stockName, timeRange) => {
    if (stockName === "") { return false }
    console.log("Stock entered: ", stockName)

    Object.values(timerIDs).forEach(clearInterval);

    startIntervals(socket, stockName, timeRange);

    timerIDs.stockTicker = setInterval(() => {
      stockTickerInterval(socket, stockName);
    }, 5000);
    timerIDs.keyStats = setInterval(() => {
      keyStatsInterval(socket, stockName);
    }, oneDay);
    timerIDs.latestNews = setInterval(() => {
      latestNewsInterval(socket, stockName);
    }, oneDay);
    timerIDs.companyOverview = setInterval(() => {
      companyOverviewInterval(socket, stockName);
    }, oneDay);
    timerIDs.topPeers = setInterval(() => {
      topPeersInterval(socket, stockName);
    }, oneDay);
    timerIDs.chartData = setInterval(() => {
      chartDataInterval(socket, stockName, timeRange);
    }, oneDay);
    timerIDs.sectorInformation = setInterval(() => {
      sectorInformationInterval(socket, stockName);
    }, oneDay);
  });

  socket.on('searchQuery', (inputQuery) => {
    searchQuery(socket, inputQuery, allSymbols);
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

const startIntervals = (socket, stockName, timeRange) => {
  stockTickerInterval(socket, stockName);
  keyStatsInterval(socket, stockName);
  latestNewsInterval(socket, stockName);
  companyOverviewInterval(socket, stockName);
  topPeersInterval(socket, stockName);
  chartDataInterval(socket, stockName, timeRange);
  sectorInformationInterval(socket, stockName);
}

const stockTickerInterval = async (socket, stockName) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );

    const { latestPrice, latestUpdate, change, changePercent } = quote.data

    const stockTicker = {
      latestPrice,
      latestUpdate,
      change,
      changePercent
    }

    socket.emit("stockTicker", stockTicker);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const getCompanySymbols = async () => {
  try {
    const companySymbols = await axios.get(
      `${HOST}/ref-data/symbols?token=${TOKEN}`
    )

    return companySymbols.data.map(data => ({ symbol: data.symbol, name: data.name }))

  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const searchQuery = async (socket, inputQuery, allSymbols) => {
  try {
    const a = await allSymbols
    const b = a.map(data => ({ symbol: data.symbol, name: data.name }))
    const filteredData = b.filter(search => search.symbol.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1 || search.name.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1);


    const topTen = filteredData.slice(0, 10)
    socket.emit("companySymbols", topTen);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const keyStatsInterval = async (socket, stockName) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );
    const earnings = await axios.get(
      `${HOST}/stock/${stockName}/earnings/1/actualEPS?token=${TOKEN}`
    );

    const { companyName, symbol, currency, primaryExchange, open, high, low, previousClose, previousVolume, avgTotalVolume, marketCap, peRatio, week52High, week52Low, ytdChange, isUSMarketOpen } = quote.data

    const earningsPerShare = typeof earnings.data === 'number' ? earnings.data : undefined

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
      eps: earningsPerShare
    }

    socket.emit("keyStats", keyStats);
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
      news1Date:news.data[0].datetime,
      news1url:news.data[0].url,
      news2: news.data[1].headline,
      news2Date:news.data[1].datetime,
      news2Source: news.data[1].source,
      news2url:news.data[1].url,
      news3: news.data[2].headline,
      news3Date:news.data[2].datetime,
      news3url:news.data[2].url,
      news3Source: news.data[2].source,
      news4Date:news.data[3].datetime,
      news4url:news.data[3].url,
      news4: news.data[3].headline,
      news4Source: news.data[3].source,
      news5Date:news.data[4].datetime,
      news5url:news.data[4].url,
      news5: news.data[4].headline,
      news5Source: news.data[4].source
    }

    // socket.emit('latestNews', news.data.slice(0, 5));

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

    const { website, description, symbol, companyName } = company.data;

    const companyOverview = {
      website,
      description,
      symbol,
      companyName
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

    const peersList = peers.data.map(data => (data))

    socket.emit("topPeers", peersList);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};

const chartDataInterval = async (socket, stockName, timeRange) => {
  try {
    const chart = await axios.get(
      `${HOST}/stock/${stockName}/chart/${timeRange}?token=${TOKEN}`
    );
    console.log(timeRange)
    const time= () => {
      if (timeRange === '1d') return chart.data.map(data => ({ close: data.close, date: data.minute }))
      else return chart.data.map(data => ({ close: data.close, date: data.date }))

    }
    const chartData= time(timeRange)

    // const chartData = chart.data.map(data => ({ close: data.close, date: data.date }))
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

    const { primaryExchange, companyName, symbol } = quote.data;
    const { currency } = dividends.data[0];
    const { sector } = company.data;

    const sectorInformation = {
      primaryExchange,
      currency,
      sector,
      companyName,
      symbol
    }

    socket.emit("sectorInformation", sectorInformation);
  } catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};
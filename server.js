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

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  socket.on("test", (stockName) => {
    if (interval) {
      clearInterval(interval);
    }
    console.log("test recieved")
    console.log(stockName)
    interval = setInterval(() => getApiAndEmit(socket, stockName), 1000);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

const getApiAndEmit = async (socket, stockName) => {
    try {
      const res = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${stockName}/quote?token=sk_72576fe17dd04de4907aff14eb6507c2`
      );
      const test = {
        companyName: res.data.companyName,
        symbol:res.data.symbol,
        primaryExchange:res.data.primaryExchange,
        latestPrice:res.data.latestPrice,
        latestTime:res.data.latestTime,
        previousClose:res.data.previousClose,
        previousVolume:res.data.previousVolume,
        change:res.data.change,
        changePercent:res.data.changePercent,
        avgTotalVolume:res.data.avgTotalVolume,
        marketCap:res.data.marketCap,
        peRatio:res.data.peRatio,
        week52High:res.data.week52High,
        week52Low:res.data.week52Low,
        ytdChange:res.data.ytdChange,
        isUSMarketOpen:res.data.isUSMarketOpen


      }

      socket.emit("FromAPI", test);
    } catch (error) {
      //TODO: Handle error
      console.error(`Error: ${error}`);
    }
  };
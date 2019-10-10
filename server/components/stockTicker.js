const axios = require("axios");
const stockTicker = async (socket, stockName, HOST, TOKEN) => {
  try {
    const quote = await axios.get(`${HOST}/stock/${stockName}/quote?token=${TOKEN}`);
    const { latestPrice, latestUpdate, change, changePercent } = quote.data;
    const stockTicker = {
      latestPrice,
      latestUpdate,
      change,
      changePercent
    };
    socket.emit("stockTicker", stockTicker);
  }
  catch (error) {
    //TODO: Handle error
    console.error(`Error: ${error}`);
  }
};
exports.stockTicker = stockTicker;

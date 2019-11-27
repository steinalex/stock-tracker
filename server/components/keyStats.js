const axios = require("axios");
exports.getKeyStats = (HOST, TOKEN) => async stockName => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );
    const earnings = await axios.get(
      `${HOST}/stock/${stockName}/earnings/1/actualEPS?token=${TOKEN}`
    );
    const {
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
      isUSMarketOpen
    } = quote.data;

    const earningsPerShare =
      typeof earnings.data === "number" ? earnings.data : null;

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
    };

    return keyStats;
  } catch (error) {
    return error;
  }
};

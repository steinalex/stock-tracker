const axios = require("axios");
exports.getTopPeers = (HOST, TOKEN) => async (stockName, allSymbolsPromise) => {
  try {
    const peers = await axios.get(
      `${HOST}/stock/${stockName}/peers?token=${TOKEN}`
    );
    const allSymbols = await allSymbolsPromise;
    const peersList = peers.data.map(symbol => {
      const { name } = allSymbols.find(data => data.symbol === symbol) || {};
      return { symbol, name };
    });

    return peersList;
  } catch (error) {
    return error;
  }
};

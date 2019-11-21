const axios = require("axios");
exports.emitTopPeers = async (
  socket,
  stockName,
  HOST,
  TOKEN,
  allSymbolsPromise,
  tempRoomId
) => {
  try {
    const peers = await axios.get(
      `${HOST}/stock/${stockName}/peers?token=${TOKEN}`
    );
    const allSymbols = await allSymbolsPromise;
    const peersList = peers.data.map(symbol => {
      const { name } = allSymbols.find(data => data.symbol === symbol) || {};
      return { symbol, name };
    });

    socket.emit(tempRoomId, peersList);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

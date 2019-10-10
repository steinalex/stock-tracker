const axios = require("axios");
const topPeers = async (socket, stockName, HOST, TOKEN) => {
  try {
    const peers = await axios.get(`${HOST}/stock/${stockName}/peers?token=${TOKEN}`);
    const peersList = peers.data.map(data => (data));
    socket.emit("topPeers", peersList);
  }
  catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.topPeers = topPeers;

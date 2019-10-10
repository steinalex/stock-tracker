const axios = require("axios");
const latestNewsInterval = async (socket, stockName, HOST, TOKEN) => {
  try {
    const news = await axios.get(`${HOST}/stock/${stockName}/news?token=${TOKEN}`);
    const top5news = news.data.slice(0, 5).map(data => ({
      headline: data.headline,
      source: data.source,
      date: data.datetime,
      url: data.url
    }));
    socket.emit('latestNews', top5news);
  }
  catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.latestNewsInterval = latestNewsInterval;

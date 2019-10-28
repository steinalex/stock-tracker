const axios = require("axios");
exports.emitLatestNews = async (socket, stockName, HOST, TOKEN) => {
  try {
    const news = await axios.get(
      `${HOST}/stock/${stockName}/news/last/5?token=${TOKEN}`
    );
    const latestNews = news.data.map(data => ({
      headline: data.headline,
      source: data.source,
      date: data.datetime,
      url: data.url
    }));

    socket.emit("latestNews", latestNews);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const axios = require("axios");
exports.getNews = (HOST, TOKEN) => async stockName => {
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

    return latestNews;
  } catch (error) {
    console.error(`Error: ${error}`);
    return error;
  }
};

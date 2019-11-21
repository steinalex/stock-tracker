const axios = require("axios");
exports.getChart = (HOST, TOKEN) => async (stockName, timeRange) => {
  try {
    const chart = await axios.get(
      `${HOST}/stock/${stockName}/chart/${timeRange}?token=${TOKEN}`
    );
    const time = () => {
      if (timeRange === "1d")
        return chart.data.map(data => ({
          close: data.close,
          date: `${data.date} ${data.minute}`
        }));
      else
        return chart.data.map(data => ({ close: data.close, date: data.date }));
    };
    const chartData = time(timeRange);

    return chartData;
  } catch (error) {
    return error;
  }
};

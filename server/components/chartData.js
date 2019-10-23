const axios = require("axios");
const chartData = async (socket, stockName, timeRange, HOST, TOKEN) => {
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
    socket.emit("chartData", chartData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.chartData = chartData;

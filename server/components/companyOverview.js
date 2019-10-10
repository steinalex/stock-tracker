const axios = require("axios");
const companyOverview = async (socket, stockName, HOST, TOKEN) => {
  try {
    const company = await axios.get(`${HOST}/stock/${stockName}/company?token=${TOKEN}`);
    const { website, description, symbol, companyName } = company.data;
    const companyOverview = {
      website,
      description,
      symbol,
      companyName
    };
    socket.emit("companyOverview", companyOverview);
  }
  catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.companyOverview = companyOverview;

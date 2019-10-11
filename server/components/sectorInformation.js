const axios = require("axios");
const sectorInformation = async (socket, stockName, HOST, TOKEN) => {
  try {
    const quote = await axios.get(
      `${HOST}/stock/${stockName}/quote?token=${TOKEN}`
    );
    const dividends = await axios.get(
      `${HOST}/stock/${stockName}/dividends/1y?token=${TOKEN}`
    );
    const company = await axios.get(
      `${HOST}/stock/${stockName}/company?token=${TOKEN}`
    );
    const { primaryExchange, companyName, symbol } = quote.data;
    const currency =
      (dividends.data.length > 0 && dividends.data[0].currency) || null;
    const { sector } = company.data;
    const sectorInformation = {
      primaryExchange,
      currency,
      sector,
      companyName,
      symbol
    };
    socket.emit("sectorInformation", sectorInformation);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.sectorInformation = sectorInformation;

const axios = require("axios");

exports.emitSectorInformation = (HOST, TOKEN) => async stockName => {
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
      sector,
      currency,
      companyName,
      symbol
    };

    return sectorInformation;
  } catch (error) {
    console.error(`Error: ${error}`);
    return error;
  }
};

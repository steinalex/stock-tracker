const axios = require("axios");
exports.getCompanyOverview = (HOST, TOKEN) => async stockName => {
  try {
    const company = await axios.get(
      `${HOST}/stock/${stockName}/company?token=${TOKEN}`
    );
    const { website, description, symbol, companyName } = company.data;
    const companyOverview = {
      website,
      description,
      symbol,
      companyName
    };

    return companyOverview;
  } catch (error) {
    return error;
  }
};

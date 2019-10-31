const matchInput = input => new RegExp("^" + input.toUpperCase());

exports.emitSearchQuery = async (socket, inputQuery, allSymbols) => {
  try {
    const symbols = await allSymbols;

    const filterData = symbols.filter(
      search =>
        search.symbol.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1 ||
        search.name.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1
    );

    const sortDataByRelevance = filterData.sort((a, b) => {
      const aStart = a.symbol.match(matchInput(inputQuery)) || [];
      const bStart = b.symbol.match(matchInput(inputQuery)) || [];

      if (aStart.length != bStart.length) return bStart.length - aStart.length;
      return a.symbol > b.symbol ? 1 : -1;
    });

    socket.emit("companySymbols", sortDataByRelevance.slice(0, 10));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

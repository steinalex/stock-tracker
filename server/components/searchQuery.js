const emitSearchQuery = async (socket, inputQuery, allSymbols) => {
  try {
    const symbols = await allSymbols;
    const filteredData = symbols.filter(
      search =>
        search.symbol.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1 ||
        search.name.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1
    );
    const topTen = filteredData.slice(0, 10);
    socket.emit("companySymbols", topTen);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
exports.emitSearchQuery = emitSearchQuery;

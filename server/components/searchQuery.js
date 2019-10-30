exports.emitSearchQuery = async (socket, inputQuery, allSymbols) => {
  try {
    const symbols = await allSymbols;

    const filterData = symbols.filter(item => {
      return item.symbol.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1;
    });

    const dataSort = filterData.sort((a, b) => {
      const aStart =
        a.symbol.match(new RegExp("^" + inputQuery.toUpperCase())) || [];
      const bStart =
        b.symbol.match(new RegExp("^" + inputQuery.toUpperCase())) || [];

      if (aStart.length != bStart.length) return bStart.length - aStart.length;
      else return a.symbol > b.symbol ? 1 : -1;
    });

    socket.emit("companySymbols", dataSort.slice(0, 10));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

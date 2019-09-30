
import { ON_STOCK_DATA_RECIEVED, UPDATE_SELECTED_STOCK, UPDATE_CHART_RANGE,  UPDATE_KEY_STATS, UPDATE_LATEST_NEWS, UPDATE_COMPANY_OVERVIEW, UPDATE_TOP_PEERS, UPDATE_SEARCH, UPDATE_COMPANY_SYMBOLS, UPDATE_QUOTES } from './constants'

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ON_STOCK_DATA_RECIEVED:
            return {
                ...state,
                stockData: payload
            }
        case UPDATE_SELECTED_STOCK:
            return {
                ...state,
                selectedStock: payload
            }
        case UPDATE_CHART_RANGE:
            return {
                ...state,
                selectedChartRange: payload
            }
        case UPDATE_KEY_STATS:
            return {
                ...state,
                selectedKeyStats: payload
            }
        case UPDATE_LATEST_NEWS:
            return {
                ...state,
                selectedLatestNews: payload
            }
        case UPDATE_COMPANY_OVERVIEW:
            return {
                ...state,
                selectedCompanyOverview: payload
            }
        case UPDATE_TOP_PEERS:
            return {
                ...state,
                selectedTopPeers: payload
            }
        case UPDATE_SEARCH:
            return {
                ...state,
                selectedSearch: payload
            }
        case UPDATE_COMPANY_SYMBOLS:
            return {
                ...state,
                selectedCompanySymbols: payload
            }
        case UPDATE_QUOTES:
            return {
                ...state,
                selectedQuotes: payload
            }
        default:
            return state;
    }
}


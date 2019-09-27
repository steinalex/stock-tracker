
import { ON_STOCK_DATA_RECIEVED, UPDATE_SELECTED_STOCK, UPDATE_CHART_RANGE } from './constants'

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
        default:
            return state;
    }
}


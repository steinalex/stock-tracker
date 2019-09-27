import { ON_STOCK_DATA_RECIEVED, UPDATE_SELECTED_STOCK, UPDATE_CHART_RANGE, BOOTSTRAP } from './constants'

export const bootstrap = () => ({ type: BOOTSTRAP })

export const updateResponseAction = (action) => ({
    type: ON_STOCK_DATA_RECIEVED,
    payload: action
})

export const updateStockAction = (action) => ({
    type: UPDATE_SELECTED_STOCK,
    payload: action
})

export const updateChartAction = (action) => ({
    type: UPDATE_CHART_RANGE,
    payload: action
})

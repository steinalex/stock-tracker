import { createStore } from 'redux';

const initialState = {
    response: false,
    stock: '',
    chartData: ''
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, {type, payload}){
    switch(type){
        case 'SET_RESPONSE':
            return {
                ...state,
                response: payload
            }
        case 'UPDATE_STOCK':
            return {
                ...state,
                stock: payload
            }
        case 'UPDATE_CHART':
            return {
                ...state,
                chartData: payload
            }
        default:
            return state;
    }
}

export const updateResponseAction = (action) => ({
    type: 'SET_RESPONSE',
    payload: action
})

export const updateStockAction = (action) => ({
    type: 'UPDATE_STOCK',
    payload: action
})

export const updateChartAction = (action) => ({
    type: 'UPDATE_CHART',
    payload: action
})
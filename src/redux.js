import { createStore } from 'redux';

const initialState = {
    response: false,
    stock: ''
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, {type, payload}){
    switch(type){
        case 'UPDATE_RESPONSE':
            return {
                ...state,
                response: [...state.response, payload]
            }
        case 'UPDATE_STOCK':
            return {
                ...state,
                stock: payload
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
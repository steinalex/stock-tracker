import { UPDATE_SELECTED_STOCK, UPDATE_CHART_RANGE, BOOTSTRAP } from './constants'
import { updateResponseAction } from './actions'

const io = require('socket.io-client')

const HOST = 'http://localhost'
const PORT = 4000
const SERVER = `${HOST}:${PORT}`

const socket = io(SERVER);


export const startupMiddleware = store => next => action => {

    if (action.type === BOOTSTRAP) {

        socket.on('FromAPI', (payload1) => {
            console.info('Data has been receieved', payload1)
            store.dispatch(updateResponseAction(payload1))
        });

        console.info('Application has been bootstrapped')
    }

    return next(action)
}


export const stockMiddleware = store => next => action => {
    console.log("payload is", action.payload)
    console.log(store.getState())

    if (action.type === UPDATE_SELECTED_STOCK) {
        socket.emit('stockName', action.payload, store.getState().selectedChartRange)
    }
    else if (action.type === UPDATE_CHART_RANGE) {
        socket.emit ('timeRange' , store.getState().selectedStock,action.payload)
    }


    return next(action)
}
import { createStore, applyMiddleware, compose } from 'redux';
import { startupMiddleware, stockMiddleware } from './middleware'
import {reducer} from './reducer'
import { bootstrap } from './actions'

const initialState = {
    selectedStock: '',
    selectedChartRange: '5y',
    selectedKeyStats:{},
    selectedLatestNews:'',
    selectedCompanyOverview:'',
    selectedTopPeers:[],
    selectedSearch:'',
    selectedCompanySymbols:[],
    selectedQuotes:'',
    selectedStockTicker:'',
    selectedChartData:[],
    enteredSearchQuery:''
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, initialState,
    composeEnhancers(
        applyMiddleware(...[stockMiddleware, startupMiddleware])
    ))

store.dispatch(bootstrap())
 
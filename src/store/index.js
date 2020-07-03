import {createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger()

const Store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger)
)

export default Store
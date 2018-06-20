//import createstore
import { createStore } from 'redux';
//import reducers
import { crudReducer } from './reducers';
//set store = to reducer content and export
export default createStore(crudReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

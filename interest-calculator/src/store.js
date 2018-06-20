import {createStore} from 'redux';

import {interestCalculatorReducer} from './reducers';

export default createStore(interestCalculatorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

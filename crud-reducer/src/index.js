import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './store';

import {addItem, updateItem, deleteItem} from './actions';

store.dispatch(addItem({id: 0, name: 'Foo'}));
store.dispatch(addItem({id: 1, name: 'Bar'}));
store.dispatch(addItem({id: 2, name: 'Baz'}));

store.dispatch(updateItem({id: 0, name: 'Food'}));
store.dispatch(updateItem({id: 1, name: 'Bard'}));
store.dispatch(updateItem({id: 2, name: 'Bash'}));

store.dispatch(deleteItem({id: 1}));

// We expect to see:
// [
//     {
//         id: 0,
//         name: 'Food'
//     },
//     {
//         id: 2,
//         name: 'Bash'
//     }
// ]
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();


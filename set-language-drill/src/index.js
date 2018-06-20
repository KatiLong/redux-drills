import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {setLanguage} from './actions';

// Should output {language: 'en'}
console.log(store.getState());
// Switch to German
store.dispatch(setLanguage('de'));
// Should output {language: 'de'}
console.log(store.getState());

//Wrap the application inside the Provider, give it property of store
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();

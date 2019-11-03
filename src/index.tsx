import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/global.css';
import 'styles/var.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import SendingError from "routers/SendingError";
import SendingSuccess from "routers/SendingSucces";

let Cmp;
const path = window.location.pathname;

if (/^\/sending-error/.test(path)) {
    Cmp = SendingError;
} else if (/^\/sending-success/.test(path)) {
    Cmp = SendingSuccess;
} else {
    Cmp = App;

    window.history.pushState({}, document.title, '/');
}

ReactDOM.render(<Cmp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

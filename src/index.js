import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App';

import '../assets/style/style.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={App} />
        </div>
    </BrowserRouter>
    , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';

import App from './App';
import data from './data.json';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App data={data}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Home />,
    </BrowserRouter>
    ,document.getElementById("root")
);



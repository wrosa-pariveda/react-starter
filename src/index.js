import ReactDom from 'react-dom';
import React from 'react';
import App from './app';

ReactDom.render(
    React.createElement(App),
    document.getElementById('root')
);
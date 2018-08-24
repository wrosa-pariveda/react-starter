import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import routes from './routes';

const el = React.createElement;

const App = () => {
    return el(BrowserRouter, null,
        el(Switch, null,
            Object.keys(routes).map(routeKey => el(Route, { key: routeKey, ...routes[routeKey] }))
        )
    );
};

export default App;
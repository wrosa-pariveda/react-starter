import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes';
import store from './redux/store';

const el = React.createElement;

const App = () => {
    return el('div', null,
        //placeholder for side menu,
        el(Provider, { store },
            el(BrowserRouter, null,
                el(Switch, null,
                    Object.keys(routes).map(routeKey => el(Route, { key: routeKey, ...routes[routeKey] }))
                )
            )
        )
    );
};

export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes';
import store from './redux/store';
import SideMenu from './components/side_menu';

const el = React.createElement;

const App = () => {
    return el('div', null,
        el(React.StrictMode, null,
            el(Provider, { store },
                el(React.Fragment, null,
                    el(SideMenu),
                    el(BrowserRouter, null,
                        el(Switch, null,
                            Object.keys(routes).map(routeKey => el(Route, { key: routeKey, ...routes[routeKey] }))
                        )
                    )
                )
            )
        )
    );
};

export default App;
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routes, RouterPropTypes } from '../routes';
import BasePage from '../components/base_page';

const el = React.createElement;

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null,
            el(BasePage, { title: 'Home' },
                el(Grid, { container: true },
                    el(Grid, { item: true, xs: 3 }),
                    el(Grid, { item: true, xs: 6 },
                        el(Link, { to: routes.lazyLoad.path }, 'Lazy Load Example Page'),
                        el('p'),
                        el(Link, { to: routes.async.path }, 'Async Example Page')
                    ),
                    el(Grid, { item: true, xs: 3 }),
                )
            ),
        );
    }
}

HomePage.propTypes = {
    // Own

    // Mapped

    // Router
    history: RouterPropTypes.history,
    location: RouterPropTypes.location,
    match: RouterPropTypes.match,

    // Styles
};

export default HomePage;
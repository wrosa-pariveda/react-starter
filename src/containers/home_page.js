import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import BasePage from '../components/base_page';

const el = React.createElement;

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null,
            el(BasePage, { title: 'Home' },
                el(Link, { to: routes.sideLoad.path }, 'Side Load Example Page'),
                el('br'),
                el(Link, { to: routes.async.path }, 'Async Example Page')
            ),
        );
    }
}

export default HomePage;
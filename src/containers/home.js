import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import BasePage from '../components/base_page';

const el = React.createElement;

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null,
            el(BasePage, { title: 'Home' },
                el(Link, { to: routes.chunk1.path }, 'Chunk 1'),
                el('br'),
                el(Link, { to: routes.chunk2.path }, 'Chunk 2')
            ),
        );
    }
}

export default Home;
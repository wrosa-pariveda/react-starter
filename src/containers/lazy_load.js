import React from 'react';
import { Grid } from '@material-ui/core';
import BasePage from '../components/base_page';
import LazyLoadHello from '../components/lazy_load_hello';

const el = React.createElement;

class LazyLoadPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el(BasePage, { title: 'Lazy Load Example' },
            el(Grid, { container: true },
                el(Grid, { item: true, xs: 3 }),
                el(Grid, { item: true, xs: 6 },
                    el('p', null, 'Lazy Load Example Page'),
                    el('p', null, 'Check your browser\'s Network tab to see this Javascript being loaded on demand'),
                    el(LazyLoadHello)
                ),
                el(Grid, { item: true, xs: 3 }),
            )
        )
    }
}

export default LazyLoadPage;
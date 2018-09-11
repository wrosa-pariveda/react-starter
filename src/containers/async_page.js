import React from 'react';

const el = React.createElement;

class AsyncPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null, 'Async Page');
    }
}

export default AsyncPage;
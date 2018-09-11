import React from 'react';

const el = React.createElement;

class SideLoadPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null, 'Side Load');
    }
}

export default SideLoadPage;
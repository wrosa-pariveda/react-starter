import React from 'react';

const el = React.createElement;

class Chunk2 extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null, 'Chunk 2');
    }
}

export default Chunk2;
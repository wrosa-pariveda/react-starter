import React from 'react';

const el = React.createElement;

class Chunk1 extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return el('div', null, 'Chunk 1');
    }
}

export default Chunk1;
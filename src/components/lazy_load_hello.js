import React from 'react';

const el = React.createElement;

const LazyLoadHello = () => {
    return el('p', { style: { color: 'red' } }, 'Hello: I am a React component only present on the Lazy Load Example Page JS bundle');
}

export default LazyLoadHello;
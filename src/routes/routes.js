import React from 'react';
import AsyncPage from '../containers/async_page';
import HomePage from '../containers/home_page';
import asyncComponent from '../components/async_component';

/**
 * @typedef {Object} Route
 * @prop {string} path
 * @prop {React.ReactNode} component
 * @prop {boolean} exact
 */

/**
 * @type {{[key:string]:Route}}
 */
const routes = {
    home: {
        path: '/',
        component: HomePage,
        exact: true
    },
    sideLoad: {
        path: '/sideLoad',
        component: asyncComponent(() => import(/* webpackChunkName: "side_load" */ '../containers/side_load').then(module => module.default))
    },
    async: {
        path: '/async',
        component: AsyncPage
    }
};

export default routes;
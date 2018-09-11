import AsyncPage from '../containers/async_page';
import HomePage from '../containers/home_page';
import asyncComponent from '../components/async_component';

const Routes = {
    home: {
        path: '/',
        component: HomePage,
        exact: true
    },
    lazyLoad: {
        path: '/lazyLoad',
        component: asyncComponent(() => import(/* webpackChunkName: "lazy_load" */ '../containers/lazy_load').then(module => module.default))
    },
    async: {
        path: '/async',
        component: AsyncPage
    }
};

export default Routes;
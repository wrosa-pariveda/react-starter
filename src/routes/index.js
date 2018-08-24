import Chunk2 from '../containers/chunk2';
import Home from '../containers/home';
import { asyncComponent } from '../components';

const routes = {
    home: {
        path: '/',
        component: Home,
        exact: true
    },
    chunk1: {
        path: '/chunk1',
        component: asyncComponent(() => import(/* webpackChunkName: "chunk1" */ '../containers/chunk1').then(module => module.default))
    },
    chunk2: {
        path: '/chunk2',
        component: Chunk2
    }
};

export default routes;
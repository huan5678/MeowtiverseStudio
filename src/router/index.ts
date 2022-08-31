import Home from '../pages/index';
import Collection from '../pages/collection';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/collection',
    component: Collection,
  },
  {
    path: '*',
    component: Home,
  }
];

export default routes;

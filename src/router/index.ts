import Home from '../pages/index';
import Collection from '../pages/collection';
import Wallet from '../pages/wallet';
import CollectionDetail from '../pages/collectionDetail';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/collection',
    component: Collection,
    children: [
      {
        path: ':path',
        component: CollectionDetail,
      }
    ]
  },
  {
    path: '/wallet',
    component: Wallet,
  },
  {
    path: '*',
    component: Home,
  },
];

export default routes;

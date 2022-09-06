import { Routes, Route } from 'react-router-dom';
import Layout from './components/LayoutComponent';
import routes from './router';
import {Provider} from 'jotai';
function App()
{
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.path} index={route.exact} path={route.path} element={ <route.component />} />
          ))}
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

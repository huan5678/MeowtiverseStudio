import { Routes, Route } from 'react-router-dom';
import Layout from './components/LayoutComponent';
import routes from './router';
function App()
{
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.path} index={route.exact} path={route.path} element={<route.component />}>
              {route.children?.map((child, index) => (
                <Route key={index} index={child.exact} path={child.path} element={<child.component />} />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
  );
}

export default App;

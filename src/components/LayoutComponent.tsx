import {Outlet} from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import {data} from '../fakeData';

export const Layout = () =>
{
  const { headerList, footerList } = data;
  return (
  <>
    <HeaderComponent data={headerList} />
    <Outlet />
    <FooterComponent data={footerList} />
  </>
  )
}

export default Layout;

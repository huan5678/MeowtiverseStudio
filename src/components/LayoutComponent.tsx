import {Outlet} from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import useStore from '../context';
import {navData} from '..';
import { useEffect } from 'react';

export const Layout = () =>
{
  const {
    headerList,
    footerList,
    getHeader,
    getFooter,
  } = useStore((state: any) => ({
    headerList: state.headerList,
    footerList: state.footerList,
    getHeader: state.getHeader,
    getFooter: state.getFooter,
  }));
  useEffect(() =>
  {
    getHeader();
    getFooter();
  }, []);
  return (
    <>
      <HeaderComponent data={headerList} />
      <Outlet />
      <FooterComponent data={footerList} />
    </>
  );
}

export default Layout;

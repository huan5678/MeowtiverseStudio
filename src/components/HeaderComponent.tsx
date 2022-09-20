import { useState, useEffect } from 'react';
import {BiMenu, BiX} from 'react-icons/bi';
import LogoIcon from '../components/LogoIcon';
import useWindowSize from '../helpers/windowResize';
import IconComponent from './IconComponent';
import {Link, useLocation} from 'react-router-dom';
import {navData} from '..';

const HeaderComponent = () =>
{
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ logoWidth, setLogoWidth ] = useState<string | number>('100%');
  const [ logoHeight, setLogoHeight ] = useState<string | number>('100%');
  const [ isScrollDown, setIsScrollDown ] = useState(false);
  const [ scrollY, setScrollY ] = useState(0);
  const size = useWindowSize();
  const location = useLocation();
  const data: navData['data'] = [
    {
      name: 'Collections',
      path: 'collection',
    },
    {
      name: 'Wallet',
      path: 'wallet',
    },
    {
      name: 'User',
      path: 'user',
    },
  ];
  useEffect(() =>
  {
    window.addEventListener('scroll', () =>
    {
      setScrollY(window.scrollY);
      if (window.scrollY > scrollY) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    });
  }, [ scrollY ]);
  useEffect(() =>
    {
    if (size.width >= 992) {
      return setLogoWidth(64), setLogoHeight(64);
    }
    if (size.width >= 768) {
      return setLogoWidth(52), setLogoHeight(52);
    }
    return () => (setLogoWidth(48), setLogoHeight(48));
  }, [ size.width ]);

  return (
    <header
      className={`${
        location.pathname === '/'
          ? `bg-opacity-30 ${
              isScrollDown ? '-translate-y-full' : 'translate-y-0'
            } lg:fixed lg:w-full lg:top-0 lg:left-0`
          : 'bg-opacity-100 border-b border-b-primary-50'
      } z-[99999] bg-primary-900 fixed w-full left-0 top-0 transition duration-300`}
    >
      <div className="md:container p-0">
        <nav className="flex justify-between items-center relative p-2 md:px-0 lg:py-2">
          <h2 className="font-bold text-center group transition duration-300">
            <Link
              to="/"
              className="text-center p-2 flex gap-2 lg:gap-4 items-center justify-center lg:text-primary-600 lg:group-hover:drop-shadow-lg lg:group-hover:drop-shadow-primary-100 lg:group-hover:text-primary-900"
            >
              <LogoIcon
                data={{
                  logoWidth: logoWidth,
                  logoHeight: logoHeight,
                }}
              />
              <span className="hidden text-primary-50 lg:block lg:group-hover:text-primary-400 text-xl">
                Meowtiverse
              </span>
            </Link>
          </h2>
          {menuIsOpen ? null : (
            <div className="absolute top-1/2 right-0 -translate-y-1/2 px-4 lg:hidden">
              <button
                type="button"
                className="rounded-full bg-black p-2 text-4xl"
                onClick={() => setMenuIsOpen(true)}
              >
                <span className="hidden">MenuButton</span>
                <BiMenu className="text-white text-lg" />
              </button>
            </div>
          )}

          <div
            className={
              menuIsOpen
                ? 'left-0 absolute z-20 w-full h-screen top-0 bg-primary transition-all duration-300 ease-in-out lg:left-auto lg:h-auto lg:relative lg:bg-transparent'
                : 'left-[-200%] absolute w-full h-screen top-0 bg-primary transition-all duration-300 ease-in-out lg:left-auto lg:h-auto lg:relative lg:bg-transparent'
            }
          >
            <div className="flex flex-col justify-between lg:items-center h-full lg:flex-row lg:justify-end lg:gap-8">
              {data?.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className="grid place-content-center gap-2 py-2 w-full h-full text-4xl text-center font-bold text-primary-100 hover:text-primary-200 hover:underline hover:bg-primary-400 lg:text-xl lg:w-auto lg:hover:bg-transparent lg:hover:text-primary-400"
                >
                  <span className="flex gap-2 items-center">
                    <>{IconComponent(item.name)}</>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            {menuIsOpen ? (
              <div className="absolute top-0 right-0 px-4 translate-y-6 z-30 lg:order-1 lg:hidden">
                <button
                  className="rounded-full bg-black p-2 text-4xl"
                  type="button"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <span className="hidden text-xl">closeButton</span>
                  <BiX className="text-white" />
                </button>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;

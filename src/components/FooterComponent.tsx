import {useEffect, useState} from 'react';
import useWindowSize from '../helpers/windowResize';
import IconComponent from './IconComponent';
import LogoIcon from './LogoIcon';
import {navData} from '..';
import {Link} from 'react-router-dom';

const FooterComponent = ({ data }:navData) => {
  const [logoWidth, setLogoWidth] = useState<string | number>('100%');
  const [logoHeight, setLogoHeight] = useState<string | number>('100%');
  const size = useWindowSize();
  useEffect(() => {
    if (size.width >= 992) {
      return setLogoWidth(72), setLogoHeight(72);
    }
    if (size.width >= 768) {
      return setLogoWidth(52), setLogoHeight(52);
    }
    return () => (setLogoWidth(48), setLogoHeight(48));
  }, [size.width]);
  return (
    <footer className="bg-primary text-center text-white pt-4 pb-8">
      <div className="container">
        <div className="flex justify-between items-center mb-4 lg:mb-8">
          <Link to="/" className="text-center p-2 flex gap-2 lg:gap-4 items-center justify-center lg:group-hover:drop-shadow-lg lg:group-hover:drop-shadow-primary-100">
              <LogoIcon
                data={{
                  logoWidth: logoWidth,
                  logoHeight: logoHeight,
                }}
              />
              <h2 className="hidden md:block text-primary-50 text-center text-lg font-semibold">
                Meowtiverse
                <br />
                Studio
              </h2>
          </Link>
          <nav className="flex justify-center gap-6 lg:gap-8">
            {data.map((item) => (
              <Link to={`${item.path}`} key={item.name} className="flex flex-col gap-2 items-center group transition duration-300"
                >
                  <div className="text-primary-50 text-2xl lg:text-4xl lg:group-hover:text-primary-200">
                    {
                      IconComponent(item.icon)
                    }
                  </div>
                  <h3 className="hidden text-primary-50 opacity-90 transition duration-300 lg:block lg:opacity-0 lg:group-hover:opacity-90">
                    {item.name}
                  </h3>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p className="text-sm">COPYRIGHT © 2022 Meowtiverse Studio</p>
    </footer>
  );
};

export default FooterComponent;

import IconComponent from './IconComponent';
import LogoIcon from './LogoIcon';
import {navData} from '..';
import {Link} from 'react-router-dom';

const FooterComponent = ({ data }:navData) => {
  return (
    <footer className="bg-primary text-center text-white pt-4 pb-8 border-t border-primary-50">
      <div className="container">
        <div className="flex justify-between items-center mb-4 lg:mb-8">
          <Link to="/" className="text-center p-2 flex gap-2 lg:gap-4 items-center justify-center lg:group-hover:drop-shadow-lg lg:group-hover:drop-shadow-primary-100">
              <LogoIcon
                data={{
                  logoWidth: 48,
                  logoHeight: 48,
                }}
              />
              <h2 className="hidden md:block text-primary-50 text-center font-semibold">
                Meowtiverse
                <br />
                Studio
              </h2>
          </Link>
          <nav className="flex justify-center gap-6 lg:gap-8">
            {data?.map((item) => (
              <Link to={`${item.path}`} key={item.name} className="flex flex-col gap-2 items-center group transition duration-300"
                >
                  <div className="text-primary-50 text-2xl lg:text-4xl lg:group-hover:text-primary-200">
                    {
                      IconComponent(item.name)
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

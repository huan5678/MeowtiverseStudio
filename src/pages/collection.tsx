import {Link} from 'react-router-dom';

import {data} from '../fakeData';

const collection = () => {
  return (
    <main className="bg-[url(@/assets/images/collectionBanner.png)] bg-cover bg-no-repeat">
      <div className="container">
        <h1 className="text-center text-6xl text-primary-50 py-4">Collection</h1>
        <ul className="flex flex-col gap-8">
          {data.collections.map((item, index) => (
            <li className="border border-primary-400 bg-primary-50" key={index}>
              <div className="flex flex-col md:flex-row gap-4 p-4">
                <img src={item.img} alt={item.title} className="w-full h-80 object-cover md:w-1/2 md:flex-auto" />
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl text-primary text-center md:text-left md:text-4xl">{item.title}</h2>
                  <p className="text-primary-400 mb-auto">{item.description}</p>
                  <Link to={`/collection/`} className="btn text-primary-50 rounded-none text-lg">
                    就決定是你了
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default collection;

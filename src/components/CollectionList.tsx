import { Link } from 'react-router-dom';
import useStore from '../context';
import {useEffect} from 'react';
import {collectionData} from '..';

interface State
{
  collectionsData: collectionData['data'];
  getCollection: () => void;
}

const CollectionList = () =>
{
  const {collectionsData, getCollection} = useStore<State>((state: any) => ({
    collectionsData: state.collectionsData,
    getCollection: state.getCollection,
  }));
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <ul className="flex flex-col gap-8">
      {collectionsData?.map((item, index) => (
        <li className="" key={index}>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <img
              src={`src/assets/images/${item.img}.png`}
              alt={item.title}
              className="object-cover md:max-w-sm md:w-1/2 md:aspect-square"
            />
            <div className="flex flex-col gap-4 p-4 border border-primary bg-primary-50 w-full">
              <h2 className="text-2xl text-primary text-center md:text-left md:text-4xl">
                {item.title}
              </h2>
              <p className="text-primary-400 mb-auto">{item.description}</p>
              <Link to={`${item.path}`} className="btn text-primary-50 rounded-none text-lg">
                就決定是你了
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CollectionList;

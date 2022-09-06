import {Link} from 'react-router-dom';
import { useAtom, useSetAtom } from 'jotai';
import { collections } from '../context';
import { collectionData } from '..';

const Collection = () =>
{
  // const [ collections, setCollections ] = useState<collectionData>();
  // const [ collectionsData, setCollectionsData ] = useAtom(collections);
  const collectionsData = useAtom(collections);
  console.log(collectionsData);

  // useEffect(() =>
  // {
  //   const dbRef = ref(db);
  //   get(child(dbRef, 'collections')).then((snapshot) =>
  //   {
  //     if (snapshot.exists())
  //     {
  //       setCollections(snapshot.val());
  //     }
  //     else
  //     {
  //       console.log('No data available');
  //     }
  //   }).catch((error) =>
  //   {
  //     console.error(error);
  //   });
  // }, []);
  return (
    <main className="bg-gradient-to-b from-primary-900 to-primary-500">
      <div className="container">
        <h1 className="text-center text-6xl text-primary-50 py-4">Collection</h1>
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

export default Collection;

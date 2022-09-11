import { collectionData } from "..";
import useStore from '../context';

export default function Wallet()
{
  // const collectionsData: collectionData[ 'data' ] = storeFn((state: any) => state.collectionsData);
  // console.log(collectionsData);
  return (
    <section className="container h-screen">
      <div className="flex flex-col justify-center items-center h-full ">
        <h1 className="text-4xl text-primary">Wallet</h1>
      </div>
    </section>
  );
}

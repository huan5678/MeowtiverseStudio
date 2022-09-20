import {useAccount} from 'wagmi';

import MintNFT from '../components/MintNFT';

const CollectionDetail = () => {
  const {isConnected} = useAccount();
  return (
    <div>
      collectionDetail
      {isConnected && <MintNFT />}
    </div>
  );
}

export default CollectionDetail;

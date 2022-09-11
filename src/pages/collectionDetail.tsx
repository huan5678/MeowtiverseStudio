import {useAccount} from 'wagmi';

import MintNFT from '../components/MintNFT';

export default function CollectionDetail() {
  const {isConnected} = useAccount();
  return (
    <div>
      collectionDetail
      {isConnected && <MintNFT />}
    </div>
  );
}

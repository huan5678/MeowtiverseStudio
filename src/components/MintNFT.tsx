
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import
  {
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from 'wagmi';

import contractInterface from '../contracts/contract-abi.json';

const contractConfig = {
  addressOrName: import.meta.env.VITE_PICASSO_CONTRACT_ADDRESS,
  contractInterface,
};

const MintNFT = () =>
{
  const [totalMinted, setTotalMinted] = useState(0);
  const { address, isConnected } = useAccount();
  const [mintedTokenId, setMintedTokenId] = useState<number>();
  const [ mintLoading, setMintLoading ] = useState(false);

  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(config);


  const {data: totalSupplyData} = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    watch: true,
  });

  const {data: walletOfOwner} = useContractRead({
    ...contractConfig,
    functionName: 'walletOfOwner',
    args:address,
  });

  const checkOwner = async () =>
  {
    try {
      console.log('walletOfOwner', walletOfOwner)
    }
    catch (err) {
      console.log('walletOfOwner', err)
    }
  }

  const onMintClick = async () => {
    try {
      setMintLoading(true);
      const tx = await mint({
        args: [1, {value: ethers.utils.parseEther('0.0001')}],
      });
      const receipt = await tx.wait();
      console.log('TX receipt', receipt);
      // @ts-ignore
      const mintedTokenId = await receipt.events[0].args[2].toString();
      setMintedTokenId(mintedTokenId);
    } catch (error) {
      console.error(error);
    } finally {
      setMintLoading(false);
    }
  };

  useEffect(() => {
    console.log('address: ', address);
    console.log('contract', contractInterface);
    console.log('function', totalSupplyData);
    if (walletOfOwner) console.log('walletOfOwner', walletOfOwner);
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData.toNumber());
    }
  }, [totalSupplyData]);

  return (
    <>
      <section className="container flex flex-col justify-center items-center p-6 gap-4">
        <h1 className="text-center text-4xl">鑄造 NFT</h1>
        <p className="">總共有 {totalMinted} 個 NFT 可被鑄造</p>
        <button
          type="button"
          className="w-1/4 px-4 py-2 rounded border border-primary-500 bg-transparent text-primary transition-all duration-300 hover:bg-primary-500/90 hover:text-primary-50 hover:border-transparent active:scale-90"
          onClick={() => checkOwner()}
        >
          checkOwner
        </button>
        <button
          type="button"
          disabled={!isConnected || mintLoading}
          onClick={() => onMintClick()}
          className="w-1/4 px-4 py-2 rounded border border-primary-500 bg-transparent text-primary transition-all duration-300 hover:bg-primary-500/90 hover:text-primary-50 hover:border-transparent active:scale-90"
        >
          {isConnected ? '🎉 Mint' : '🎉 Mint (Connect Wallet)'}
        </button>
        {mintError && <p className="text-red-400">⛔️ Mint unsuccessful! Error message:</p>}

        {mintError && (
          <pre className="mt-2 text-red-500">
            <code>{JSON.stringify(mintError, null, ' ')}</code>
          </pre>
        )}
        {mintLoading && <p>Minting... please wait</p>}

        <div className="flex flex-col items-center gap-4">
          {mintedTokenId && (
            <>
              <h2 className="text-2xl">NFT 已經成功鑄造</h2>
              <p className="text-center">您的 NFT 將在接下來的幾分鐘內顯示在您的錢包中。</p>
              <p>
                從<a href={`https://rinkeby.etherscan.io/tx/${mintData?.hash}`}>Etherscan</a>
                查看交易詳情。
              </p>
              <p>
                從<a href={`https://testnets.opensea.io/assets/rinkeby/${txData?.to}/1`}>Opensea</a>
                查看 NFT 詳情。
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MintNFT;

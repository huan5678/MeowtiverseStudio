import {ConnectButton} from '@rainbow-me/rainbowkit';
export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({account, chain, openAccountModal, openChainModal, openConnectModal, mounted}) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button className="bg-gray-600 text-white px-8 py-2 transition-all duration-300 hover:bg-gray-400 active:scale-90"
                    onClick={openConnectModal}
                    type="button"
                  >
                    連接錢包
                  </button>
                );
              }
              return (
                <div className="flex gap-6">
                  <button
                    onClick={openChainModal}
                    className="flex items-center"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{width: 12, height: 12}}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance ? ` (${account.displayBalance})` : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

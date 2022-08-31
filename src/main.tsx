import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
  darkTheme,
  midnightTheme,
} from '@rainbow-me/rainbowkit';
import {chain, configureChains, createClient, WagmiConfig} from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy';

const {chains, provider, webSocketProvider} = configureChains(
  [chain.rinkeby],
  [
    alchemyProvider({
      apiKey: import.meta.env.VITE_ALCHEMY_API_KEY as string,
    }),
]);

const {connectors} = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          appInfo={{
            appName: 'Meowtiverse Studio',
          }}
          chains={chains}
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme(),
          }}
        >
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);

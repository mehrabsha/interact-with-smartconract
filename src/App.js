import './App.css';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Mint from './Mint';
import { Web3ReactModal } from '@bitiumagency/web3-react-modal';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider)
}

function App() {
  return (
    <Web3ReactProvider
      getLibrary={getLibrary}>
      <Mint />
      <Web3ReactModal
        useWeb3React={
          useWeb3React
        }
        supportedChains={[{
          name: 'Rinkeby',
          chainId: 4,
          rpcUrl: 'https://rinkeby.infura.io/v3/',
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
          }
        }]}
        connectors={[{
          title: 'Wallet Connect',
          id: 'walletconnect',
          connector: WalletConnectConnector,
          options: {
            rpc: { 1: 'https://rinkeby.infura.io/v3/' },
            qrcode: true,
          }
        }]}
      />
    </Web3ReactProvider>
  );
}

export default App;

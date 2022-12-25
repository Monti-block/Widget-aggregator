import './App.css';
import { SwapWidget } from '@dodoex/widgets';

function App() {
  return (
    <div className="App">
      
      
      <div className="widget">
      <SwapWidget
      colorMode="dark"
      
      jsonRpcUrlMap={{
        1: [
          'https://rpc.ankr.com/eth',
          'https://eth-mainnet.public.blastapi.io',
          'https://eth-rpc.gateway.pokt.network',
          'https://main-rpc.linkpool.io'],
        2: ['https://rpc.ankr.com/polygon'],
        3: ['https://rpc.ankr.com/bsc'],
        4: ['https://rpc.ankr.com/arbitrum'],
        5: ['https://rpc.ankr.com/optimism']}}
        
        defaultChainId={1}

        feeRate={1500000000000000}
        rebateTo='0xC022B4D80db9AD7c8c1A310a573421240A2aBCE1'

      
         />
        </div>
    </div>
  );
}

export default App;




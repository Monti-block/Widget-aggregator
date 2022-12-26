import './App.css';
import { SwapWidget } from '@dodoex/widgets';

function App() {
  return (
    <div className="App">
      
      
      <div className="widget">
      <SwapWidget
      
      
      theme={{
        palette: {
          // light | dark
          mode: 'light',
          primary: {
            // main color, noir #1A1A1B
            main: '#1A1A1B',
          },
          secondary: {
            // secondary color（used for buttons or some window‘s background colors）
            main: '#0857ee', //bleu
            contrastText: '#1A1A1B',
          },
          error: {
            main: '#EC5A7D',
            contrastText: '#FFFFFF',
          },
          warning: {
            main: '#B15600',
            contrastText: '#1A1A1B',
          },
          success: {
            main: '#2FBA90',
            contrastText: '#1A1A1B',
          },
          purple: {
            main: '#6851B4',
            contrastText: '#1A1A1B',
          },
          background: {
            default: '#F9F6E8', //F9F6E8
            paper: '#FFFFFF',
            paperContrast: '#F6F6F6',
            backdrop: 'rgba(0, 0, 0, 0.9)',
            input: '#F0F0F0',
            tag: 'rgba(26, 26, 27, 0.1)',
          },
          text: {
            primary: '#1A1A1B',
            secondary: 'rgba(26, 26, 27, 0.5)',
            disabled: 'rgba(26, 26, 27, 0.3)',
            placeholder: 'rgba(26, 26, 27, 0.3)',
            link: '#1A1A1B',
          },
          border: {
            main: 'rgba(255, 255, 255)', //69, 72, 81, 0.1
            light: 'rgba(26, 26, 27, 0.3)', //26, 26, 27, 0.3
            disabled: 'rgba(26, 26, 27, 0.1)',// / 26, 26, 27, 0.1
          },
          hover: {
            default: 'rgba(26, 26, 27, 0.04)',
          },
      },
    }}

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




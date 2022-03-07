import { isBrowser } from "./util";
// TypeScript
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3 from "web3";
import { useEffect, useState } from "react";

const APP_NAME = "My Awesome App";
const APP_LOGO_URL = "https://example.com/logo.png";
const DEFAULT_ETH_JSONRPC_URL =
  "https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>";
const DEFAULT_CHAIN_ID = 1;

const useCoinbase = () => {
  const [coinbaseProvider, setCoinbaseProvider] = useState(null as any);
  useEffect(() => {
    // Initialize Coinbase Wallet SDK
    const coinbaseWallet =
      isBrowser &&
      new CoinbaseWalletSDK({
        appName: APP_NAME,
        appLogoUrl: APP_LOGO_URL,
        darkMode: false,
      });

    // Initialize a Web3 Provider object
    const coinbaseProvider =
      coinbaseWallet &&
      coinbaseWallet.makeWeb3Provider(
        DEFAULT_ETH_JSONRPC_URL,
        DEFAULT_CHAIN_ID
      );
    setCoinbaseProvider(coinbaseProvider);
  }, []);
  return coinbaseProvider;
};

export default useCoinbase;

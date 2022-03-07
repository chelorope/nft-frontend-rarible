import Web3 from "web3";
import { createRaribleSdk } from "@rarible/sdk";
import { EthereumWallet } from "@rarible/sdk-wallet";
import { Blockchain } from "@rarible/api-client";
import { Web3Ethereum } from "@rarible/web3-ethereum";
import { useState } from "react";

const useRarible = (provider: any, currentAccount: string) => {
  let wallet;
  // 1. Check if provider and currentAccount is successfully set
  if (provider && currentAccount) {
    wallet = new EthereumWallet(
      new Web3Ethereum({
        web3: new Web3(provider),
        from: currentAccount,
      }),
      Blockchain.ETHEREUM
    );
  }

  if (wallet) {
    return createRaribleSdk(wallet, "dev");
  }
  return undefined;
};

export default useRarible;

import { useState } from "react";

const useWallet = (provider: any) => {
  const [account, setAccount] = useState();

  const onConnect = () => {
    if (!provider) {
      alert("No provider found!");
    } else {
      (async () => {
        // 1. Making wallet request
        await provider.request({ method: "eth_requestAccounts" });
        // 2. Getting currently connected accounts
        const accounts = (await provider.request({
          method: "eth_accounts",
        })) as any;

        if (accounts.length > 0) {
          // First item is always currently used account
          setAccount(accounts[0]);
        }
      })().then(() => {});

      // Setting event listener on whenever user has changed account
      provider.on("accountsChanged", (accs: any) => {
        const [currentAccount] = accs;
        setAccount(currentAccount);
      });
    }
  };

  return [onConnect, account];
};

export default useWallet;

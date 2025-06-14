// MintButton.tsx
"use client";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { mintNft } from "../scripts/mint"; // Your mint script

export function MintButton() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    setLoading(true);
    try {
      await mintNft({ connection, wallet }); // Only trigger the script
      alert("Mint successful!");
    } catch (e) {
      alert("Mint failed: " + (e instanceof Error ? e.message : JSON.stringify(e)));
    }
    setLoading(false);
  };

  return (
    <button onClick={handleMint} disabled={loading || !wallet.connected}>
      {loading ? "Minting..." : "Mint NFT"}
    </button>
  );
}
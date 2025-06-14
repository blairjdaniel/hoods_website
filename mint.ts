import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";

export async function mintNft({ connection, wallet }) {
  console.log("mintNft: function called", { connection, wallet});
  console.log("mintNft: wallet state:", wallet);

  if (!wallet.connected || !wallet.publicKey) {
    console.warn("mintNft: Wallet not connected or publicKey missing");
    throw new Error("Connect your wallet first!");
  }

  try {
    const candyMachineIdStr = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID;
    if (!candyMachineIdStr) {
      console.error("mintNft: Candy Machine ID not set in env");
      throw new Error("Candy Machine ID not set!");
    }
  const candyMachineId = new PublicKey(candyMachineIdStr);
  console.log("mintNft: Using Candy Machine ID", candyMachineId.toBase58());

  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet.adapter));
  console.log("mintNft: Metaplex instance created");

  try {
    console.log("wallet.adapter:", wallet.adapter);
    console.log("wallet.adapter.publicKey:", wallet.adapter.publicKey?.toBase58?.());
    console.log("wallet.adapter.signTransaction:", typeof wallet.adapter.signTransaction);

    // Fetch the Candy Machine object first
    const candyMachine = await metaplex.candyMachines().findByAddress({ address: candyMachineId });
    const { nft, response } = await metaplex.candyMachines().mint({ candyMachine });
    console.log("mintNft: Mint transaction sent, awaiting confirmation...");
  } catch (e) {
    console.error("mintNft: Error during mint() call:", e);
    throw e;
  }

    await response.confirmation();
    console.log("mintNft: Transaction confirmed, NFT minted:", nft.address.toBase58());

    return nft;
  } catch (e) {
    console.error("mintNft: Error during mint:", e);
    throw e;
  }
}
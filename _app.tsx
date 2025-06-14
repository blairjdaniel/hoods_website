import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import WalletContextProvider from '../contexts/WalletContextProvider';
import Head from 'next/head';
import { MintButton } from "../components/MintButton";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // Add other wallet adapters here if needed
    ],
    []
  );

  return (
    <>
      <Head>
        <title>BurrowBorn</title>
        <link rel="icon" href="/Users/blairjdaniel/blairjdaniel/rogues/solana-frontend-development-course/assets/gifRogues.gif" />
      </Head>
      <WalletContextProvider>
        <Navbar />
       
          <MintButton />
        
      </WalletContextProvider>
    </>
  );
}

export default MyApp

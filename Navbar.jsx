"use client";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { MintButton } from './MintButton';

const Navbar = () => {
    return (
        <nav className='p-4 flex justify-between items-center bg-zinc-800'>
            <a href="/">
                <div className="relative">
                    <img src="/Users/blairjdaniel/blairjdaniel/rogues/solana-frontend-development-course/public/gifRogues.gif" />
                </div>
            </a>

            <WalletMultiButton className='!bg-helius-orange hover:!bg-black transition-all duration-200 !rounded-lg' />
            <MintButton className="bg-blue-600 text-white px-4 py-2 rounded font-bold" />
        </nav>
    );
};

export default Navbar;
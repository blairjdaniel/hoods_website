import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-20 bg-black bg-opacity-70">
            <Link
                to="/Burr0wb0rn"
                className="block text-center text-white text-base font-bold bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4"
            >
                Go to Burr0wb0rn
            </Link>
        </nav>
    );
};

export default NavBar;
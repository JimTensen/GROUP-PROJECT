import React from 'react';
import {Link} from 'react-router-dom';
import vaultLogo from "./VaultLogoTransparent.PNG";

function Header() {
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500" >
            <nav className="text-black font-serif font-semibold text-right"> 
                <div className="text-2xl inline-block px-10 hover:text-white">
                    <Link to='/home'>Home</Link>
                </div>
                <div className="text-2xl inline-block px-10 hover:text-white">
                    <Link to='/vault'>Vault</Link>
                </div>
                <div className="text-2xl inline-block px-10 hover:text-white">
                    <Link to='/contact'>Contact</Link>
                </div>
                <Link to='/home'>
                    <img className="text-left inline-block h-32 w-32"  src={vaultLogo} alt="Vault Logo"/>
                </Link>
            </nav>
        </div>
    )
}

export default Header;
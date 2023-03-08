import React from 'react';
import {Link} from 'react-router-dom';

const hStyle={
    textAlign: 'center',
    backgroundColor: 'gray',
}

function Header() {
    return(
        <div className="bg-gray-400" >
            <div>
                <h1 className="inline-block">The Vault</h1>
            </div>
            <nav className="text-right"> 
                <div className="inline-block px-10 ">
                    <Link to='/home'>Home</Link>
                </div>
                <div className="inline-block px-10 ">
                    <Link to='/vault'>Vault</Link>
                </div>
                <div className="inline-block px-10 ">
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;
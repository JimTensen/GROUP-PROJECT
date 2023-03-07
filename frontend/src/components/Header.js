import React from 'react';
import {Link} from 'react-router-dom';

const hStyle={
    textAlign: 'center',
    backgroundColor: 'gray',
}

function Header() {
    return(
        <div style={hStyle}>
            <h1>The Vault</h1>
            <Link to='/home'>Home</Link>
            <Link to='/vault'>Vault</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Header;
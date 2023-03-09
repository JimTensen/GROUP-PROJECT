import React from 'react';
import {Link} from 'react-router-dom'

const fStyle={
    textAlign: 'center',
    backgroundColor: 'gray'
}

function Footer() {
    return(
        <div style={fStyle}>
            <Link to='/home'>Home</Link>
            <Link to='/vault'>Vault</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Footer;
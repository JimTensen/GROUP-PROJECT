import React from 'react';
import {Link} from 'react-router-dom'


function Footer() {
    return(
       <> 
        <div className='bg-gray-400'>
            <Link to='/home'>Home</Link>
            <Link to='/vault'>Vault</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <div>
            
        </div>
       </> 
    )
}

export default Footer;
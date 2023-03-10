import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button'

import HomeIcon from '@mui/icons-material/Home';
import VaultIcon from '@mui/icons-material/Token';
import ContactsIcon from '@mui/icons-material/Contacts';

import Typography from '@mui/material/Typography';

import vaultLogo from "./VaultLogoTransparent.PNG";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Russo One'
    ].join(','),
  },});

function Header() {
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500" >
            <nav className="text-black font-serif font-semibold"> 
                <Link to='/home'>
                    <img className="inline-block h-32 w-32"  src={vaultLogo} alt="Vault Logo"/>
                </Link>
                <div className="float-right text-2xl inline-block pt-12 px-10">
                    <Link to='/contact'>

                        <Button className= "hover:text-black text-bold" size="large" variant="contained">Contact <ContactsIcon className="pl-1"/> </Button>

                    <ThemeProvider theme={theme}>
                        <div>
                            <Button className= "hover:text-black text-bold" size="large" variant="contained">Contact</Button>
                        </div>
                    </ThemeProvider>

                    </Link>
                </div>
                <div className="float-right text-2xl inline-block hover:text-white pt-12 px-10 ">
                    <Link to='/vault'> 

                        <Button className= "hover:text-black text-bold" size="large" variant="contained">Vault <VaultIcon className="pl-1"/></Button>

                    <ThemeProvider theme={theme}>
                        <div>
                            <Button className= "hover:text-black text-bold" size="large" variant="contained">Vault</Button>
                        </div>
                    </ThemeProvider>

                    </Link>
                </div>
                <div className="float-right text-2xl inline-block hover:text-white pt-12 px-10 ">
                    <Link to='/home'>

                        <Button className= "hover:text-black text-bold" size="large" variant="contained">Home <HomeIcon className="pl-1"/></Button>

                    <ThemeProvider theme={theme}>
                        <div>
                            <Button className= "hover:text-black text-bold" size="large" variant="contained">Home</Button>
                        </div>
                    </ThemeProvider>

                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;
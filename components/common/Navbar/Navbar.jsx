"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';;
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

//logo
import logo from '../../../assets/nextrade-logo.png'
import Image from 'next/image';

const pages = ['Home', 'Services', 'About', 'Resources'];
const otherLinks = ['Trade Hub','Signin/Login'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return 
  (
     <AppBar position="static">
     <Container maxWidth="xl">
       <Toolbar disableGutters>
        <Image className='mx-10' src={logo} width={100} height={100} alt='nexTrade'/>
         <Box className='pl-36 w-full tex-center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}>
           {pages.map((page) => (
             <Button
               key={page}
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               {page}
             </Button>
           ))}
         </Box>
         <Box className='w-full pl-36' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         {otherLinks.map((links) => (
             <Button
               key={links}
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               {links}
             </Button>
           ))}
         </Box>
       </Toolbar>
     </Container>
   </AppBar>
  );
}
export default NavBar;
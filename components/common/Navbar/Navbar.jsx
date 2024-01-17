"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';;
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

//logo
import logo from '../../../assets/nextrade-logo.png'


//Pages
const pages = ['Home', 'Services', 'About', 'Resources'];
const otherLinks = ['Trade Hub','Signin/Login'];


const Navbar = () => {

  //state-nave-menu
const [anchorElNav, setAnchorElNav] = React.useState(null);


//functions-open-close-nave-menu
const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};


  return (
    <AppBar className='bg-primary-white' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image className='mx-5' src={logo} width={200}  alt='NexTrade' />
          <Box sx={{ flexGrow: 1, paddingLeft: '70px' , display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                className='text-primary-darkBlue font-semibold'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {otherLinks.map((links) => (
              <Button
              className='text-primary-darkBlue font font-semibold'
                key={links}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {links}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, paddingLeft:{xs:'40px', md:'0px'} , display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#21366c"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {otherLinks.map((links) => (
                <MenuItem key={links} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{links}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
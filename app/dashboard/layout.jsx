"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import logo from "@/assets/nextrade-logo.png"

// mui icons
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const drawerWidth = 240;

const Dashboard = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dashboardUpperLinkForUser = [
        {
            route: "Dashboard",
            pathname: "/dashboard",
            icon: <NotificationsIcon />
        },
        {
            route: "Portfolio",
            pathname: "/dashboard/portfolio",
            icon: <ShoppingCartIcon />
        },
        {
            route: "Trading",
            pathname: "/dashboard/trading",
            icon: <ShoppingCartIcon />
        }
    ]

    const dashboardLowerLink = [
        {
            route: "Back to home",
            pathname: "/",
            icon: <HomeIcon />
        }
    ]

    const drawer = (
        <div>
            <Image src={logo}  width={140} className='mx-auto my-6' alt='logo'></Image>
            <Divider />
            <List>
                {
                    dashboardUpperLinkForUser.map((link, idx) => (
                        <ListItem key={idx} disablePadding>
                            <Link href={link.pathname} className='w-full'>
                                <ListItemButton className='w-full'>
                                    <ListItemIcon>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={link.route} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
            {dashboardLowerLink.map((link, idx) => (
                <ListItem key={idx} disablePadding>
                    <Link href={link.pathname}>
                        <ListItemButton>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.route} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </div>
    );



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar 
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:"#21366c"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    Dashboard
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Dashboard;
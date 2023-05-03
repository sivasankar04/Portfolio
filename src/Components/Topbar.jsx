import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, NavLink } from "react-router-dom";

import { TOPBAR_PAGES } from './Constants';
import Icons from './Icons/Icons';

const TopBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar style={{ background: '#000000', borderBottom: 'solid 1px grey' }} position="static">
            <Container maxWidth="xxl">
                <Toolbar >
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <Icons type="menu" />
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
                            {TOPBAR_PAGES.map((page, index) => (
                                <MenuItem key={page} onClick={() => {
                                    handleCloseNavMenu();
                                }}>
                                    <Typography textAlign="center">
                                        <NavLink style={({ isActive }) => { return isActive ? { textDecoration: 'none', color: 'orange' } : { color: 'grey', textDecoration: 'none' } }} to={`${index === 0 ? '/' : `/${page}`}`}>
                                            {page}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'home'}
                            onClick={() => {
                                handleCloseNavMenu();
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={({ isActive }) => { return isActive ? { textDecoration: 'none', color: 'orange' } : { color: 'grey', textDecoration: 'none' } }} to={`/`}>
                                <Icons type="home" style={{ padding: '0px' }} />
                            </NavLink>
                        </Button>
                        {TOPBAR_PAGES.map((page, index) => (
                            <div key={index} className='pe-4'>
                                {index !== 0 ? < Button
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(`${page}`)
                                    }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <NavLink style={({ isActive }) => { return isActive ? { textDecoration: 'none', color: 'orange' } : { color: 'grey', textDecoration: 'none' } }} to={`/${page}`}>
                                        {page}
                                    </NavLink>
                                </Button> : null}
                            </div>
                        ))}
                    </Box>

                    <Box style={{ display: 'flex' }} sx={{ flexGrow: 0 }}>
                        <Avatar src="/assets/images/homeImage.JPG" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default TopBar;

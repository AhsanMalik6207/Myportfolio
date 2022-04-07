import React from "react";
import { makeStyles, Typography, AppBar, Toolbar, Button, Box, Hidden, IconButton } from '@material-ui/core';
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from "react-scroll";
import logo from '../images/logo.png'
const useStyle = makeStyles(() => ({
    navbar: {
        backgroundColor: '#143438',
        color: '#fff'
    },
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    navlinks: {
        color: '#fff'
    }
}));

export default function Navbar({ navlinks, handleDrawerToogler }) {
    const classes = useStyle();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar} style={{ backgroundColor: "#1e464a" }}>
                <Typography variant="h5" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                    {/* {"-- Ahsan's Portfolio --"} */}
                    <img src={logo} height={110} width={150} />

                </Typography>
                <Box component={Hidden} xsDown>
                    <Box>
                        {navlinks.map((item, i) => (
                            <Button
                                key={i}
                                className={classes.navlinks}
                                to={`${item.Id}`}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                component={Link}
                                color='inherit'>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Box>
                {/* this is for Hidden component when user inspect the screee  */}
                <Box component={Hidden} smUp>
                    <IconButton onClick={handleDrawerToogler} color="inherit">
                        <MenuOpenRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
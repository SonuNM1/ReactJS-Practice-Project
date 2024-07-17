import { AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

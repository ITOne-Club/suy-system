import { AppBar, IconButton, Toolbar, Typography, Drawer, ListItem, ListItemButton, ListItemIcon, List, ListItemText, SwipeableDrawer, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from "react";

const toggleDrawer = () => {

}

const NavBar = () => {
    const [navOpen, setNavOpen] = React.useState(false);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => { setNavOpen(true) }}
                    ><MenuIcon /></IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        #SUY - Bảng điều khiển
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer open={navOpen} onOpen={() => setNavOpen(true)} onClose={() => setNavOpen(false)} anchor="left">
                <List sx={{ width: "200px" }}>
                    <ListItem>
                        <ListItemButton href="/">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText>Trang chủ</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton onClick={() => { setNavOpen(false) }}>
                            <ListItemIcon><KeyboardDoubleArrowLeftIcon /></ListItemIcon>
                            <ListItemText>Đóng</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    )
}

export default NavBar;
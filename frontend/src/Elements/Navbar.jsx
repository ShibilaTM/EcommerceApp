import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-e.png'
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menu,setMenu] = useState('shop')

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: 'transparent', position: 'fixed' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" className='nav_logo' sx={{ flexGrow: 1, color: 'black' }}>
    <img src={logo} alt="" />
    <p>e-Shop</p>
</Typography>


          {/* Drawer for small screens */}
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
    <List>
    <ListItem button onClick={handleDrawerClose}>
      <Link
        to='/'
        exact
        style={{ textDecoration: 'none', color: 'black' }}
        onClick={() => { setMenu('shop') }}
        activeClassName="activeLink"
      >
        Shop {menu === 'shop' ? <hr /> : <></>}
      </Link>
    </ListItem>
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/mens' style={{ textDecoration: 'none', color: 'black' }} onClick={() => { setMenu('mens') }}>
        Men {menu === 'mens' ? <hr /> : <></>}
      </Link>
    </ListItem>
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/womens' style={{ textDecoration: 'none', color: 'black' }} onClick={() => { setMenu('womens') }}>
        Women {menu === 'womens' ? <hr /> : <></>}
      </Link>
    </ListItem>
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/kids' style={{ textDecoration: 'none', color: 'black' }} onClick={() => { setMenu('kids') }}>
        Kids {menu === 'kids' ? <hr /> : <></>}
      </Link>
    </ListItem>
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/auth' style={{ textDecoration: 'none', color: 'black' }}>
        Login
      </Link>
    </ListItem>
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}>
        Admin
      </Link>
    </ListItem>
  </List>
</Drawer>

          {/* Buttons for larger screens */}
          <Box className='navbar'
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: '20px',
              alignItems: 'center',
            }}
          >
        
        <Typography className='nav-menu' variant="h6" component="div" sx={{ color: 'black' }}>
          <Link to='/' style={{ textDecoration: 'none' }} onClick={() => { setMenu('shop') }}>
              Shop {menu === 'shop' ? <hr /> : <></>}
          </Link>
        </Typography>

            <Typography className='nav-menu' variant="h6" component="div" sx={{ color: 'black' }}>
              <Link to='/mens' style={{textDecoration:'none'}} onClick={()=>{setMenu('mens')}}>
              Men {menu==='mens'?<hr/>: <></>} </Link>
            </Typography>
            <Typography className='nav-menu' variant="h6" component="div" sx={{ color: 'black' }}>
              <Link to='/womens' style={{textDecoration:'none'}} onClick={()=>{setMenu('womens')}}>
              Women {menu==='womens'?<hr/>:<></>} 
              </Link>
            </Typography>
            <Typography className='nav-menu' variant="h6" component="div" sx={{ color: 'black' }}>
              <Link to='/kids' style={{textDecoration:'none'}} onClick={()=>{setMenu('kids')}}>
              Kids {menu==='kids'?<hr/>:<></>} 
              </Link>
            </Typography>
            
            <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/auth'} style={{textDecoration:'none'}}>Login</Link></Button>
            <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/admin'} style={{textDecoration:'none'}}>Admin</Link></Button>
            <Typography className='cart' sx={{ color: 'black' }}>
            <img src={cart_icon} alt=''/>
            <div className="nav-cart-count">0</div>
              
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;






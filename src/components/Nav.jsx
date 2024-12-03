import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { blue } from '@mui/material/colors';

const drawerWidth = 240;
const navItems = ['About Us', 'Pricing', 'Customers', 'Solutions'];

function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', fontFamily:'serif', backgroundColor: '#001114', height: '100vh' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px', // Adjust height if needed
        }}
      >
        <img src="/img/Logo.png" alt="Logo" style={{ maxWidth: '100px' }} /> {/* Adjust size */}
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <Box sx={{ display: 'flex', borderBottom: '2px solid #183A40'}}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#183A40',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#0FF1F6',
              display: 'block',
            }}
          >
            <img src="/img/Logo.png" alt="" />
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Buttons Section (hidden on small screens) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', ml: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '50px',
                padding: '8px 16px',
                marginRight: '10px',
                backgroundColor: '#0FF1F6',
                color: '#012329',
                '&:hover': {
                  backgroundColor: blue[100],
                },
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
              }}
            >
              Book a Demo
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '50px',
                padding: '8px 16px',
                borderColor: blue[50],
                color: blue[50],
                '&:hover': {
                  borderColor: blue[300],
                  color: blue[300],
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              color: 'white',
              width: drawerWidth,
              height: '100vh',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" className="px-2">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Nav;

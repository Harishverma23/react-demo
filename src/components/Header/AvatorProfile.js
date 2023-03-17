import * as React from 'react';
import { IconButton, Menu, Avatar, MenuItem, ListItemIcon, Divider, Paper, Box, Link } from '@mui/material';
import { headerDropdowns } from '../../utils/linkUtils';

const AvatorProfile = () => {
  // Space for varibable/hoooks and component logic
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton 
        sx={{ p: 0 }}
        onClick={handleProfileClick}
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar alt="Hero moto" src="/static/images/avatar/4.jpg" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClose={handleProfileClose}
        onClick={handleProfileClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            width: 220,
            fontSize: 1,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      > 
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              p: 1,
              width: 200,
              height: 40,
              color: 'black',
              boxShadow: 'none',
              fontSize: 12,
              backgroundColor: '#ffdcc0',
              alignItems: 'center',
              display: 'flex',
            },
          }}
        >
          <Paper>
            Deekshajain@heromotocorp.com
            <br></br>
            Gurgaon
          </Paper>
        </Box>
        {headerDropdowns.map((item) => (
          // {(item === 'Logout') ? <Divider /> : ' '}
          <MenuItem>
            <Link href={item.path} color='#333' underline='none' sx={{ display: 'flex', alignItems: 'center' }}>
              <item.icon fontSize="small" sx={{ mr: 1 }} /> {item.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
    
  );
}

export default AvatorProfile;

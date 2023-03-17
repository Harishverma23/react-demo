import * as React from 'react';
import { IconButton, Menu, MenuItem, Box, Typography, Link, Badge } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const NotificationsDropdown = () => {
  // Space for varibable/hoooks and component logic

  const notificationsItems = [
    {
      title: 'Show some love to MUI',
      desc: 'Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text',
    },
    {
      title: 'Show some notification content',
      desc: 'Lorem ipsum is simply dummy text',
    },
    {
      title: 'Show some notification content',
      desc: 'Lorem ipsum is simply dummy text',
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleNotifyClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotifyClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Badge 
        color="primary"
        variant="dot"
        sx={{ mr: 3 }}
        onClick={handleNotifyClick}
        aria-controls={open ? 'notify-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <NotificationsNoneOutlinedIcon sx={{ color: 'gray'}}/>
      </Badge>
      <Menu
        id="notify-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleNotifyClose}
        MenuListProps={{
          'aria-labelledby': 'notify-button',
          role: 'listbox',
        }}
        PaperProps={{
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiSvgIcon-root': {
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
            width: 300,
            fontSize: 1,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      > 
        <Box sx={{ p: 1.5, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}> 20 new notifications </Typography>
          <Typography component="a" href="#"> View all </Typography>
        </Box>
        {notificationsItems.map((item, index) => (
          <MenuItem
            key={item}
            divider={true}
            sx={{ display: 'block', whiteSpace: 'normal' }}
            //onClick={(event) => handleMenuItemClick(event, index)}
          >
            <Typography variant="subtitle2" noWrap="true" sx={{ fontWeight: 600 }}> {item.title} </Typography>
            <Typography variant="caption" display="block"> {item.desc} </Typography>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
    
  );
}

export default NotificationsDropdown;

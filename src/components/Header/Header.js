import { AppBar, Box, Toolbar, IconButton, Typography, Container, Link } from '@mui/material';
import { topNavPages } from '../../utils/linkUtils';
import SearchBar from '../Common/SearchBar';
import AvatorProfile from './AvatorProfile';
import NotificationsDropdown from './NotificationsDropdown';
import logo from '../../hero-logo.svg';
import './header.scss';

const Header = () => {
  // Space for varibable/hoooks and component logic
  
  return (
    <AppBar position="static" style={{ backgroundColor: '#333', mb: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 1, pl: 10, pr: 10 }}>
          <Toolbar disableGutters>

            {/* Desktop only logo*/}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </Typography>

            {/* Mobile logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </Typography>

            {/* Desktop/mobile searchbar */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <SearchBar placeholder="Search by name, department, location" />
            </Box>
            
            {/* Avator and dropdown */}
            <Box>
              <NotificationsDropdown />
              <AvatorProfile />
            </Box>
          </Toolbar>

          {/* Desktop only link */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {topNavPages.map((page) => (
              <Link
                key={page}
                underline="none"
                sx={{ my: 2, mr: 3, color: 'white', fontSize: '.8rem', textTransform: 'capitalize' }}
                href={page.path}
              >
                {page.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;

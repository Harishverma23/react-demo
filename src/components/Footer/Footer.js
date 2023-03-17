import { footerNavigation } from '../../utils/linkUtils';
import { Box, Container, Link, Typography } from '@mui/material';
import './footer.scss';

const Footer = () => {
  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}{new Date().getFullYear()}{'.'}
        <Link color="inherit" href="https://www.heromotocorp.com/en-in.html">
          Hero MotoCorp Limited
        </Link>{'.'},
        All rights reserved {'.'}
      </Typography>
    );
  };

  return (
    <footer className="app-footer">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pb: 0, pl: 8, pr: 8, fontSize: '.9rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Box>
            {footerNavigation.map((page) => (
              <Link
                key={page}
                underline="none"
                sx={{ my: 1, mr: 3, color: 'black', fontSize: '.9rem', textTransform: 'normal' }}
                href={page.path}
              >
                {page.label}
              </Link>
            ))}
          </Box>
          {<p>
            Copyright @2023. Hero MotoCorp Limited. All rights reserved.
          </p>}
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;

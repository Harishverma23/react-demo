import { Box, Container, Grid, Typography } from '@mui/material';
import './policies.scss';

const Policies = () => {
  return (
    <Box className="inner-page inner-page-banner">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pb: 5, pt: 3, pl: {md: 6, xs: 0}, pr: {md: 6, xs: 0}, color: 'white'  }}>
          <Grid container sx={{ mt: 3, mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h1" variant="h1">
              Policies
            </Typography>
          </Grid>
          <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '25rem', padding: 5 }}>
            <Grid container >
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Policies;
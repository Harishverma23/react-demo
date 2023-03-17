import { Box, Container, Grid } from '@mui/material';
import './total-rewards.scss';

const TotalRewards = () => {
  return (
    <Box className="inner-page inner-page-banner">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pb: 5, pt: 5, pl: {md: 6, xs: 0}, pr: {md: 6, xs: 0}, color: 'white'  }}>
          <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '25rem', padding: 5 }}>
            <Grid container >
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TotalRewards;

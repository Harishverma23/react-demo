import { Box, Container, Grid, Typography } from '@mui/material';
import './profile-settings.scss';

const ProfileSettings = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 3, mb: 5, color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography component="div" variant="h5">
              Profile Settings
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProfileSettings;

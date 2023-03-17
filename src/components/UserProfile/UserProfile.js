import { Box, Container, Grid, Button, Card, CardHeader, CardContent, Typography, CardMedia, Stack } from '@mui/material';
import './user-profile.scss';

const UserProfile = () => {
  return (
    <Box className="inner-page">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pb: 5, pt: 2, pl: {md: 6, xs: 0}, pr: {md: 6, xs: 0} }}>
          <Grid container sx={{ mt: 4, mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ color: 'red' }}>
              Edit my profile
            </Button>
          </Grid>
          <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '25rem', padding: 5 }}>
            <Grid container columnSpacing={3} spacing={4}>
              <Grid item md={12} sx={{  display: 'flex', justifyContent: 'flex-end' }}>
                <Button> View in Org Chart </Button>
              </Grid>
              <Grid item md={4}>
                <Card>
                  <Box align="center" sx={{ pt: 15 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 180, height: 180, position: 'absolute', mt: -25, ml: 8 }}
                      image="https://img.freepik.com/free-icon/user_318-370478.jpg?w=200"
                    />
                    <Stack spacing={0.5}>
                      <Typography component="div" variant="subtitle1"> Deeksha Jain </Typography>
                      <Typography component="div" variant="subtitle2"> HR Business partner </Typography>
                      <Typography component="div" variant="caption"> DOJ: 1 JAN 2020 </Typography>
                    </Stack>
                  </Box>
                  <CardContent>
                    
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={8}>
                <Grid container rowSpacing={3} md={12}>
                  <Grid item md={12}>
                    <Card>
                      <CardHeader title="Job history" align="left"/>
                      <CardContent>
                        
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item md={12}>
                    <Card>
                      <CardHeader title="Promotion history" align="left"/>
                      <CardContent>
                        
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item md={12}>
                    <Card>
                      <CardHeader title="Education" align="left"/>
                      <CardContent>
                        
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default UserProfile;

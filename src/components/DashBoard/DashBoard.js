import { useState } from 'react';
import { Box, Container, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './dashboard.scss';

const DashBoard = () => {
  const [mainTabValue, setMainTabValue] = useState('heroworld');
  const [newsTabValue, setNewsTabValue] = useState('news1');

  const mainHandleChange = (event, mainTabValue) => {
    setMainTabValue(mainTabValue);
  };

  const newsHandleChange = (event, newsTabValue) => {
    setNewsTabValue(newsTabValue);
  };

  const getTodayDate = () => {
    let dt = new Date();
    return (dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 2, pl: {md: 5, xs: 0}, pr: {md: 5, xs: 0} }}>
        <Box sx={{ ml: 3, mr: 3 }}>
          <Typography variant="button" display="block" sx={{ textTransform: 'none', fontWeight: 600 }}>
            Hey, Deeksha
          </Typography>
          <Typography variant="caption" display="block">
            {getTodayDate()}
          </Typography>
        </Box>
        <TabContext value={mainTabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', ml: 3, mr: 3 }}>
            <TabList onChange={mainHandleChange}>
              <Tab label="Hero World" value="heroworld" />
              <Tab label="My Desk" value="mydesk" />
            </TabList>
          </Box>
          <TabPanel value="heroworld">
            <Box sx={{ flexGrow: 1, mt: 3, mb: 5, color: 'white', display: 'flex', justifyContent: 'space-between' }}>
              <Grid container spacing={4}>
                <Grid item md={4}>
                  <Card>
                    <CardHeader title="Internal News" align="left"/>
                    <CardContent>
                      <TabContext value={newsTabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={newsHandleChange}>
                            <Tab label="Communities" value="news1" />
                            <Tab label="Hyphen" value="news2" />
                            <Tab label="Video Gallery" value="news3" />
                          </TabList>
                        </Box>
                        <TabPanel value="news1">
                          Item One
                        </TabPanel>
                        <TabPanel value="news2">
                          Item Two
                        </TabPanel>
                        <TabPanel value="news3">
                          Item Three
                        </TabPanel>
                      </TabContext>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={8}>
                  <Card>
                    <CardHeader title="Hero Bulletin" align="left"/>
                  </Card>
                </Grid>
                <Grid item md={12}>
                  <Card sx={{ display: { md: 'flex', xs: 'block' } }}>
                    <CardMedia
                      component="img"
                      sx={{ width: { md: 170, xs: 320 } }}
                      image='https://mui.com/static/images/cards/live-from-space.jpg'
                    />
                    <Box sx={{ display: { md: 'flex', xs: 'block' }, justifyContent: 'space-between', width: '100%', p: '2rem' }}>
                      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography component="div" variant="h5">
                          Idea Corner
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Lorem ipsum is simply dummy text
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" variant="contained">
                          Submit here
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="mydesk">
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    action={
                      <Button aria-label="settings">
                        <Typography>
                          Customise all
                        </Typography>
                      </Button>
                    }
                    title="Apps"
                  />
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card>
                  <CardHeader title="Unread mails" align="left"/>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card>
                  <CardHeader title="Schedule" align="left"/>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default DashBoard;

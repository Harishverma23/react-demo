import { useState } from 'react';
import { Box, Container, Grid, Typography, Tab, Paper } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SearchBar from '../Common/SearchBar';
import './knowlegde-mgt.scss';

const KnowledgeMgt = () => {
  const [kmTabValue, setKMTabValue] = useState('kmTabValue1');

  const mainHandleChange = (event, kmTabValue) => {
    setKMTabValue(kmTabValue);
  };
  return (
    <Box className="inner-page inner-page-banner">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pb: 5, pt: 3, pl: {md: 6, xs: 0}, pr: {md: 6, xs: 0}, color: 'white'  }}>
          <Grid container sx={{ mt: 7, mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h1" variant="h1">
              Knowledge management
            </Typography>
            <SearchBar placeholder='Search folder here' />
          </Grid>
          <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '25rem', padding: 5 }}>
              <TabContext value={kmTabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={mainHandleChange}>
                    <Tab label="My Bookmarks" value="kmTabValue1" />
                    <Tab label="Allocated to you" value="kmTabValue2" />
                    <Tab label="Shared with me" value="kmTabValue3" />
                    <Tab label="My drives" value="kmTabValue4" />
                  </TabList>
                </Box>
                <TabPanel value="kmTabValue1" sx={{ pl: 0, pr: 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        m: 1,
                        p: 2,
                        width: 140,
                        height: 100,
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      Bookmark Item
                    </Paper>
                    <Paper elevation={0} />
                  </Box>
                </TabPanel>
                <TabPanel value="kmTabValue2" sx={{ pl: 0, pr: 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        m: 1,
                        p: 2,
                        width: 140,
                        height: 100,
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      Allocated Item
                    </Paper>
                    <Paper elevation={0} />
                  </Box>
                </TabPanel>
                <TabPanel value="kmTabValue3" sx={{ pl: 0, pr: 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        m: 1,
                        p: 2,
                        width: 140,
                        height: 100,
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      Shared Item
                    </Paper>
                    <Paper elevation={0} />
                  </Box>
                </TabPanel>
              </TabContext>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default KnowledgeMgt;

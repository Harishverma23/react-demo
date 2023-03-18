import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRoutes from './components/PageRoutes';
import { ThemeProvider } from '@mui/material/styles';
import primaryTheme from './constants/theme';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Router>
        {/* <Login/> */}
        {/* <div className="main-body"> */}
          <Header />
          <PageRoutes/>
          <Footer />
        {/* </div> */}
      </Router>
    </ThemeProvider>
    
  );
}

export default App;

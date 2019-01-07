import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Routes from './Routes';
const MainContainer = () => (
   <React.Fragment>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
         <Routes/>
      </ThemeProvider>
   </React.Fragment>
);

export default MainContainer;

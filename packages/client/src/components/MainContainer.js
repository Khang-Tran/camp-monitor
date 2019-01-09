import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import theme from '../styles/theme';
import Routes from './Routes';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware());

const MainContainer = () => (
	<React.Fragment>
		<GlobalStyles />
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	</React.Fragment>
);

export default MainContainer;

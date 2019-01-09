import React from 'react';
import { Box, Grid, Grommet, Text } from 'grommet';
import Header from '../components/Header';

const Landing = () => {
	return (
		<Grommet full>
			<Grid
				fill
				rows={['xsmall', 'flex']}
				align='center'
				alignContent='center'
				columns={['auto', '1/2', 'auto']}
				areas={[
					{ name: 'home-icon', start: [0, 0], end: [0, 0] },
					{ name: 'main', start: [1, 1], end: [2, 1] },
					{ name: 'action-buttons', start: [2, 0], end: [2, 0] }
				]}>
				<Box gridArea='main'>
					<Text>Main</Text>
				</Box>
				<Header />
			</Grid>
		</Grommet>
	);
};

export default Landing;

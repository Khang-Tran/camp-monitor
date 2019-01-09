import React from 'react';
import { Box, Button } from 'grommet/es6';

const AuthButton = () => (
	<Box gridArea='action-buttons' direction='row' justify='center' gap='xsmall'>
		<Button label='Login' />
		<Button label='Get started' primary />
	</Box>
);

export default AuthButton;

import React from 'react';
import SiteIcon from './SiteIcon';
import AuthButton from './AuthButton';

const Header = () => {
	return (
		<React.Fragment>
			<SiteIcon />
			<AuthButton />
		</React.Fragment>
	);
};

export default Header;

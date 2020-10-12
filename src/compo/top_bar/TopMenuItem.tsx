import * as React from 'react';

const TopMenuItem = (props) => {
	return (
		<li onClick={props.changeActivePage} className={`nav-list__item`}>
			{props.children}
		</li>
	);
};

export default TopMenuItem;

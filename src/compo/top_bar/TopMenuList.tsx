import * as React from 'react';
import TopMenuItem from './TopMenuItem';

const TopMenuList = (props) => {
	return (
		<ul className='nav-list'>
			<TopMenuItem changeActivePage={() => props.changeActivePage(0)}>
				Home
			</TopMenuItem>
			<TopMenuItem changeActivePage={() => props.changeActivePage(1)}>
				Informations
			</TopMenuItem>
			<TopMenuItem changeActivePage={() => props.changeActivePage(2)}>
				Adopt Bee
			</TopMenuItem>
			<TopMenuItem changeActivePage={() => props.changeActivePage(3)}>
				Contact
			</TopMenuItem>
		</ul>
	);
};

export default TopMenuList;

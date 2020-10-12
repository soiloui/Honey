import * as React from 'react';
import { useEffect } from 'react';
import TopMenuList from './TopMenuList';
import Logo from './../../assets/img/Logo.svg';

const TopMenu = (props) => {
	useEffect(() => {
		const menuItems = Array.from(document.querySelector('.nav-list').children);

		menuItems.forEach((item, index) => {
			if (index !== props.activePage) {
				item.classList.remove('nav-list__item--active');
			} else {
				item.classList.add('nav-list__item--active');
			}
		});
	}, [props.activePage]);

	const changeActivePage = (pageNumber) => {
		props.setActivePage(pageNumber);
	};

	return (
		<nav className='TopMenu'>
			<div className='logo' onClick={() => changeActivePage(0)}>
				<img src={Logo} alt='logo' />
				<h1>honey</h1>
			</div>
			<TopMenuList changeActivePage={changeActivePage} />
		</nav>
	);
};

export default TopMenu;

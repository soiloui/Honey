import * as React from 'react';
import Logo from './../assets/img/Logo.svg';

const TopMenu = () => {
	return (
		<nav className='TopMenu'>
			<div className='logo'>
				<img src={Logo} alt='logo' />
				<h1>honey</h1>
			</div>
			<ul className='nav-list'>
				<li className='nav-list__item nav-list__item--active'>Home</li>
				<li className='nav-list__item'>Informations</li>
				<li className='nav-list__item'>About us</li>
				<li className='nav-list__item'>Contact</li>
			</ul>
		</nav>
	);
};

export default TopMenu;

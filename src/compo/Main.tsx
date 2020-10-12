import * as React from 'react';
import HomePage from './main_content/HomePage';
import InformationsPage from './main_content/InformationsPage';
import AboutPage from './main_content/AboutPage';
import ContactPage from './main_content/ContactPage';

const Main = (props) => {
	const pageToDisplay = () => {
		switch (props.activePage) {
			case 0:
				return <HomePage />;
			case 1:
				return <InformationsPage />;
			case 2:
				return <AboutPage />;
			case 3:
				return <ContactPage />;
			default:
				return <HomePage />;
		}
	};
	const page = pageToDisplay();

	return <main>{page}</main>;
};

export default Main;

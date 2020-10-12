import * as React from 'react';
import HomePage from './main_content/HomePage';
import AdoptPage from './main_content/AdoptPage';
import InformationsPage from './main_content/InformationsPage';
import ContactPage from './main_content/ContactPage';

const Main = (props) => {
	const pageToDisplay = () => {
		switch (props.activePage) {
			case 0:
				return <HomePage />;
			case 1:
				return <InformationsPage />;
			case 2:
				return <AdoptPage />;
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

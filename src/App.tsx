import * as React from 'react';
import Footer from './compo/Footer';
import Main from './compo/Main';
import TopMenu from './compo/TopMenu';
require('./assets/styles/main.scss');

const App = () => {
	return (
		<div className='App'>
			<TopMenu />
			<Main />
			<Footer />
		</div>
	);
};

export default App;

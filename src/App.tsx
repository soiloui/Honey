import * as React from 'react';
import { useState } from 'react';
import Footer from './compo/Footer';
import Main from './compo/Main';
import TopMenu from './compo/top_bar/TopMenu';
require('./assets/styles/main.scss');

const App = () => {
	const [activePage, setActivePage] = useState(() => 0);

	return (
		<div className='App'>
			<TopMenu activePage={activePage} setActivePage={setActivePage} />
			<Main activePage={activePage} />
			<Footer />
		</div>
	);
};

export default App;

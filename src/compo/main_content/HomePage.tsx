import * as React from 'react';
import HomeIllus from './../../assets/img/HomeIllus.svg';

const HomePage = () => {
	return (
		<section className='HomePage'>
			<div className='left'>
				<h2>Earth</h2>
				<h4>House for all of us</h4>
				<p>
				Bees and other pollinators play a key role in our ecosystem. Every third tablespoon of food we eat depends on the pollination process. In Europe alone, more than 4,000 varieties of vegetables depend on insect pollination. If pollinating insects were to disappear, it would be a catastrophe not only for the world - food production would collapse. What would happen with pollination? How could it be done?
				</p>
			</div>

			<img src={HomeIllus} alt='logo' />
		</section>
	);
};

export default HomePage;

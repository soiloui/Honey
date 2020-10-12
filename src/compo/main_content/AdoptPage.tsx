import * as React from 'react';
import Farmer from '../../assets/img/Farmer.svg';

const AdoptPage = () => {
	return (
		<section className='AdoptPage'>
			<h2><a href="//www.adoptujpszczole.pl" target="_blank" rel="noopener noreferrer">Adopt Bee</a></h2>
			<div className='top'>
				<p className='left'>
				Adopt a Bee is a Greenpeace social campaign that has been running since 2013, thanks to which thousands of people are involved in helping bees, and Poland is becoming more pollinator-friendly. Thanks to virtual "adoptions" on the website <a href="//www.adoptujpszczole.pl" target="_blank" rel="noopener noreferrer">adoptujpszczole.pl</a>, everyone has a chance to help honey and wild bees.
				</p>
				<p className='right'>
				By adopting bees, you work for a good and effective pollinator protection!
				This means not only protecting the insects themselves, but also entire complex ecosystems in which pollinators can live and do their useful work. One of the biggest problems facing insects is the loss of places to live and the heavy shredding of the remaining wilderness.
				</p>
			</div>

			<div className='illustration'>
				<img src={Farmer} alt='illustraion' />
			</div>

			<p>
			Adopting a bee is about helping bees by donating a specific amount to Greenpeace, which will help us in implementing activities for a pollinator-friendly Poland. Adoption can be one-time or regular (then the specified amount is charged every month). People who adopt at least 25 bees or decide to adopt a regular adoption are Bee Heroes - after the end of the campaign, they will receive personal Bee Hero or Bee Hero certificates. Additionally, people who decide to adopt a regular adoption, and their adoption renews after a month, will receive the Bee Hero Pack.
			</p>
		</section>
	);
};

export default AdoptPage;

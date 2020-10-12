import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBug,
	faAppleAlt,
	faLeaf,
	faBicycle,
} from '@fortawesome/free-solid-svg-icons';

const InformationsPage = () => {
	return (
		<section className='InformationsPage'>
			<div className='about-block'>
				<p>
				Plant pollination is one of the most important mechanisms for maintaining life on Earth. The work of bees, butterflies, bumblebees and other pollinators allows for the reproduction of a large number of plants that feed animals and humans.
				</p>
				<FontAwesomeIcon icon={faAppleAlt} className='icon' />
			</div>
			<div className='about-block'>
				<FontAwesomeIcon icon={faBug} className='icon' />
				<p>
				Unfortunately, insects are also among the first victims of the ongoing ecological crisis. The population of all insects in the world is drastically declining. They are depleting eight times faster than reptiles, birds and mammals.
				</p>
			</div>
			<div className='about-block'>
				<p>
				If this trend continues, almost half of the insect species could disappear in the next 20 to 30 years. Responsible for this, among others agricultural pesticides, the climate crisis, and the destruction and fragmentation of natural habitats.
				</p>
				<FontAwesomeIcon icon={faBicycle} className='icon' />
			</div>
			<div className='about-block'>
				<FontAwesomeIcon icon={faLeaf} className='icon' />
				<p>
				Honeybees and wild pollinators play a key role in agriculture and food production. Unfortunately, the current agricultural model based on the aggressive use of chemicals threatens both and thus poses a risk to the food supply chain. There is strong scientific evidence that neonicotinoids and other pesticides are largely responsible for the loss of bees.
				</p>
			</div>
		</section>
	);
};

export default InformationsPage;

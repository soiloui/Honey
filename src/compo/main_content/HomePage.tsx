import * as React from 'react';
import HomeIllus from './../../assets/img/HomeIllus.svg';

const HomePage = () => {
	return (
		<section className='HomePage'>
			<div className='left'>
				<h2>Earth</h2>
				<h4>House for all of us</h4>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
					voluptas praesentium iste impedit, iure quae quidem nam architecto.
					Blanditiis consectetur adipisci eos ullam qui veritatis, ex sequi?
					Consequuntur, blanditiis vel adipisci itaque, facere neque labore
					tempora doloribus sequi dolore minima et laborum accusamus pariatur
					doloremque quo soluta expedita! Ut?
				</p>
			</div>

			<img src={HomeIllus} alt='logo' />
		</section>
	);
};

export default HomePage;

import * as React from 'react';
import Farmer from '../../assets/img/Farmer.svg';

const InformationsPage = () => {
	return (
		<section className='InformationsPage'>
			<h2>Informations</h2>
			<div className='top'>
				<p className='left'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
					voluptas praesentium iste impedit, iure quae quidem nam architecto.
					Blanditiis consectetur adipisci eos ullam qui veritatis, ex
					sequi?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur qui voluptas praesentium iste impedit, iure quae quidem nam
					architecto. Blanditiis consectetur adipisci eos ullam qui veritatis,
					ex sequi?
				</p>
				<p className='right'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
					voluptas praesentium iste impedit, iure quae quidem nam architecto.
					Blanditiis consectetur adipisci eos ullam qui veritatis, ex
					sequi?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur qui voluptas praesentium iste impedit, iure quae quidem nam
					architecto. Blanditiis consectetur adipisci eos ullam qui veritatis,
					ex sequi?
				</p>
			</div>

			<div className='illustration'>
				<img src={Farmer} alt='illustraion' />
			</div>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
				voluptas praesentium iste impedit, iure quae quidem nam architecto.
				Blanditiis consectetur adipisci eos ullam qui veritatis, ex sequi?Lorem,
				ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui voluptas
				praesentium iste impedit, iure quae quidem nam architecto. Blanditiis
				consectetur adipisci eos ullam qui veritatis, ex sequi?Lorem, ipsum
				dolor sit amet consectetur adipisicing elit. Tenetur qui voluptas
				praesentium iste impedit, iure quae quidem nam architecto. Blanditiis
				consectetur adipisci eos ullam qui veritatis, ex sequi?
			</p>
		</section>
	);
};

export default InformationsPage;

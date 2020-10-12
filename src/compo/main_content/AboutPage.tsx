import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBug,
	faAppleAlt,
	faLeaf,
	faBicycle,
} from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
	return (
		<section className='AboutPage'>
			<div className='about-block'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
					minima vitae vero animi voluptatibus a quidem? Quidem ad soluta maxime
					accusamus, natus aliquid enim laudantium, animi, fuga quae temporibus.
					Reiciendis laborum nobis cupiditate officia deserunt necessitatibus
					doloremque, accusantium doloribus.
				</p>
				<FontAwesomeIcon icon={faBug} className='icon' />
			</div>
			<div className='about-block'>
				<FontAwesomeIcon icon={faAppleAlt} className='icon' />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
					veritatis reprehenderit. Sapiente minima repellat asperiores earum
					iste. Nam, eum ad repudiandae odio voluptatem enim nihil. Doloremque
					consectetur laborum neque facilis dolores vitae dicta nam, veritatis
					quasi id sit eos placeat!
				</p>
			</div>
			<div className='about-block'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui
					ipsum dolor eveniet odio asperiores voluptatum iste exercitationem
					quisquam doloribus repellat dolorum dolores amet mollitia quos
					repudiandae enim ipsam eum, cumque molestias? Atque alias eos quas
					expedita placeat perferendis ducimus!
				</p>
				<FontAwesomeIcon icon={faBicycle} className='icon' />
			</div>
			<div className='about-block'>
				<FontAwesomeIcon icon={faLeaf} className='icon' />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
					veritatis reprehenderit. Sapiente minima repellat asperiores earum
					iste. Nam, eum ad repudiandae odio voluptatem enim nihil. Doloremque
					consectetur laborum neque facilis dolores vitae dicta nam, veritatis
					quasi id sit eos placeat!
				</p>
			</div>
		</section>
	);
};

export default AboutPage;

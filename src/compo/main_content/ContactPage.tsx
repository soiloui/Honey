import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';


const ContactPage = () => {
	return (
		<section className='ContactPage'>
			<a href="mailto:spl@greenpeace.org" className="contact-item">
				<FontAwesomeIcon icon={faEnvelope} className="icon"/>
				<p>spl@greenpeace.org</p>
			</a>

			<a href="tel:+48-226-598-499" className="contact-item">
				<FontAwesomeIcon icon={faPhone} className="icon"/>
				<p>+48 226 598 499</p>
			</a>

		</section>
	);
};

export default ContactPage;

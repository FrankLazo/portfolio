import { useContext } from 'react';
import AppContext from '../store/AppContext';

const ContactPage = () =>
{
	const { handleMenuBar } = useContext( AppContext );

	return (
		<div
			className="contact-page fadeIn center-content"
			onClick={ () => handleMenuBar() }
			>
			CONTACT
		</div>
	);
};

export default ContactPage;

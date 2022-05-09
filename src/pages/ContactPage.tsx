import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import appData from '../data/appData';
import AppContext from '../store/AppContext';

const ContactPage = () =>
{
	const {
		home : { title },
		contact: { personalData, socialLinks },
	} = appData;

	const history = useHistory();
	const { handleMenuBar } = useContext( AppContext );

	const handleRedirect = () =>
	{
		history.push('./work');
	};

	return (
		<div
			className="contact-page fadeIn"
			onClick={ () => handleMenuBar() }
			>
			<div className="contact-left">
				<button
					className="contact-button-arrow"
					onClick={ handleRedirect }
					>
					<span className="contact-arrow"></span>
				</button>

				<p className="contact-title">
				{
					`${ title }`
				}
				</p>
			</div>

			<div className="contact-right">
				<div className="contact-info">
					<div className="contact-item">
						<p className="contact-data">
							{ personalData.email }
						</p>

						<div className="contact-icon icon-email"></div>
					</div>

					<div className="contact-item">
						<p className="contact-data">
							{ personalData.phone }
						</p>

						<div className="contact-icon icon-phone"></div>
					</div>

					<div className="contact-item">
						<p className="contact-data">
							{ personalData.location }
						</p>

						<div className="contact-icon icon-location"></div>
					</div>
				</div>

				<div className="contact-social">
					<a target="_blank" rel="noreferrer" href={ socialLinks.github }>
						<div className="contact-icon icon-github"></div>
					</a>

					<a target="_blank" rel="noreferrer" href={ socialLinks.linkedin }>
						<div className="contact-icon icon-linkedin"></div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

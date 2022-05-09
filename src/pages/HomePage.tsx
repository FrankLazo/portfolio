import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import appData from '../data/appData';
import AppContext from '../store/AppContext';

const HomePage = () =>
{
	const {
		home : { title, subtitle, description }
	} = appData;

	const history = useHistory();
	const { handleMenuBar, appLanguage } = useContext( AppContext );

	const handleRedirect = () =>
	{
		history.push('./work');
	};

	return (
		<div
			className="home-page fadeIn"
			onClick={ () => handleMenuBar() }
			>
			<div className="home-top">
				<p className="home-subtitle">
				{
					// @ts-ignore
					`${ subtitle[ appLanguage ].phrase1 }`
				}
					<span className="text-primary">
					{
						// @ts-ignore
						`${ subtitle[ appLanguage ].phrase2 }`
					}
					</span>
				{
					// @ts-ignore
					`${ subtitle[ appLanguage ].phrase3 }`
				}
				</p>

				<p className="home-description">
				{
					// @ts-ignore
					`${ description[ appLanguage ] }`
				}
				</p>
			</div>

			<div className="home-bottom">
				<button
					className="home-button-arrow"
					onClick={ handleRedirect }
					>
					<span className="home-arrow"></span>
				</button>

				<p className="home-title">
				{
					`${ title }`
				}
				</p>
			</div>
		</div>
	);
};

export default HomePage;

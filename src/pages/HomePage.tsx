import { useContext } from 'react';
import AppContext from '../store/AppContext';

const HomePage = () =>
{
	const { handleMenuBar } = useContext( AppContext );

	return (
		<div
			className="home-page fadeIn center-content"
			onClick={ () => handleMenuBar() }
			>
			HOME
		</div>
	);
};

export default HomePage;

import { useContext } from 'react';
import AppContext from '../store/AppContext';

const WorkPage = () =>
{
	const { handleMenuBar } = useContext( AppContext );

	return (
		<div
			className="work-page fadeIn center-content"
			onClick={ () => handleMenuBar() }
			>
			WORK
		</div>
	);
};

export default WorkPage;

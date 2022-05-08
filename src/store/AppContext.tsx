import { createContext, useState } from 'react';
import { AppContextInterface } from '../interfaces/AppInterfaces';
import { language } from '../types/AppTypes';

const AppContext = createContext< AppContextInterface >( {} as AppContextInterface );

const AppProvider = ( { children } : React.PropsWithChildren< {} > ) =>
{
	const [ menuBar, setMenuBar ] = useState< boolean >( false );
	const [ appLanguage, setAppLanguage ] = useState< string >( language.english );

	const toggleMenuBar = () =>
	{
		setMenuBar( !menuBar );
	};

	const handleMenuBar = () =>
	{
		if ( menuBar ) toggleMenuBar();
	};

	const toggleLanguage = () =>
	{
		setAppLanguage(
			appLanguage === language.spanish
			? language.english
			: language.spanish
		);
	};

	const data : AppContextInterface = {
		openedMenuBar: menuBar,
		toggleMenuBar,
		handleMenuBar,
		appLanguage,
		toggleLanguage,
	};

	return (
		<AppContext.Provider value={ data }>
			{ children }
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
